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
      // Fallback inline p/ ambiente file://
      if(path.includes("header.html")){
        inject(el, `<header class="site-header">
  <img class="hero" src="imagens/capa.jpeg" alt="Fachada da ANS Restauração Automotiva">
  <nav id="menu" aria-label="Menu principal">
    <a href="index.html">Home</a>
    <a href="sobre.html">Sobre</a>
    <a href="galeria.html">Galeria de Fotos</a>
    <a href="contato.html">Contato</a>
  </nav>
</header>
<a href="https://wa.me/551239298249?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20ANS%20Restaura%C3%A7%C3%A3o%20Automotiva."
   class="whatsapp-fixo" target="_blank" aria-label="Abrir conversa no WhatsApp">
  <img src="imagens/whatsapp.svg" alt="WhatsApp" />
</a>`);
      } else if(path.includes("footer.html")){
        inject(el, `<footer id="rodape" class="site-footer">
  <p>© 2025 Anderson Tech. Todos os direitos reservados.</p>
  <div class="social">
    <a href="https://www.instagram.com/ansrestauracao" target="_blank" aria-label="Instagram"><img src="imagens/instagram.svg" alt="Instagram" /></a>
    <a href="https://www.facebook.com/ansrestauracao" target="_blank" aria-label="Facebook"><img src="imagens/facebook.svg" alt="Facebook" /></a>
  </div>
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
