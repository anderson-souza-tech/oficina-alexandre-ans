(async function includePartials() {
  const inject = (el, html) => { el.outerHTML = html; };
  const parts = document.querySelectorAll("[data-include]");

  async function load(el){
    const path = el.getAttribute("data-include");
    try{
      const res = await fetch(new URL(path, document.baseURI), {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      inject(el, await res.text());
    }catch(err){
      console.warn("Falha ao carregar parcial:", path, err.message);
      // Fallback inline para ambiente file:// (exibição do menu/rodapé)
      if(path.includes("header.html")){
        inject(el, `<header class="site-header">
  <img class="hero" src="imagens/capa.jpeg" alt="Fachada da ANS Restauração Automotiva">
  <nav id="menu" aria-label="Menu principal">
    <a href="index.html">Home</a>
    <a href="sobre.html">Sobre</a>
    <a href="galeria.html">Galeria de Fotos</a>
    <a href="contato.html">Contato</a>
  </nav>
</header>`);
      } else if(path.includes("footer.html")){
        inject(el, `<footer id="rodape" class="site-footer">
  <p>© 2025 Anderson Tech. Todos os direitos reservados.</p>
</footer>`);
      } else {
        inject(el, `<!-- erro ao incluir ${path} -->`);
      }
    }
  }

  await Promise.all([...parts].map(load));
  highlightActive();
})();

function highlightActive(){
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const nav = document.getElementById("menu");
  if(!nav) return;
  nav.querySelectorAll("a[href]").forEach(a=>{
    const href = (a.getAttribute("href")||"").replace("./","").toLowerCase() || "index.html";
    if(href === current){
      a.classList.add("ativo");
      a.setAttribute("aria-current","page");
    } else {
      a.classList.remove("ativo");
      a.removeAttribute("aria-current");
    }
  });
}
