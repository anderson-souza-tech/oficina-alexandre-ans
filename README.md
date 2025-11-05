# README – ANS Restauração Automotiva

Site estático simples e responsivo para apresentar a ANS Restauração Automotiva: **Home**, **Sobre**, **Galeria** e **Contato**.

---

## 🌐 Acesse o site
➡️ https://anderson-souza-tech.github.io/oficina-alexandre-ans/

## 📦 Estrutura

```
/
├─ css/
│  └─ style.css
├─ imagens/
│  ├─ capa.jpeg
│  ├─ imagem1.jpeg … imagemN.jpeg
├─ index.html
├─ sobre.html
├─ galeria.html
├─ contato.html
└─ script.js
```

---

## ▶️ Como visualizar localmente

- Abra qualquer `.html` no navegador **ou**
- Use a extensão **Live Server** no VS Code (clique em “Go Live”).

---

## 🎨 Tema e paleta (CSS)

No arquivo `css/style.css`, todas as cores do tema estão centralizadas no `:root`:

```css
:root{
  --preto:#0F0F10;
  --cinza-escuro:#1E1F22;
  --cinza:#2B2D31;
  --cinza-claro:#ECECEC;
  --vermelho:#E50914;  /* Cor de destaque (links, bordas e botões) */
}
```

> **Dica:** altere apenas as variáveis para mudar a identidade visual do site.

---

## 🧱 Seções principais do CSS (onde editar)

O `style.css` está comentado e dividido por blocos. Procure pelos marcadores:

- `/* ===== Paleta de cores (tema) ===== */`  
- `/* ===== Faixa hero (imagem topo) ===== */` – altura/recorte da imagem principal  
- `/* ===== Menu principal ===== */` – links e estado ativo  
- `/* ===== Área de conteúdo ===== */` – padding e bordas internas  
- `/* ===== Galeria de imagens (lado a lado) ===== */` – **nova seção**, controla linhas/colunas  
  - Edite:
    ```css
    .galeria{
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* largura mínima dos cards */
      gap: 14px;                                                  /* espaçamento */
    }
    .galeria .img-campanha{
      height: 220px;   /* altura uniforme dos cards */
      object-fit: cover;
    }
    ```
- `/* ===== Formulário de Contato (layout original restaurado) ===== */`  
  - Mantém **nome** e **telefone** lado a lado; **mensagem** e **botão** abaixo:
    ```css
    #contatoForm{
      display:flex; flex-wrap:wrap; gap:10px; max-width:450px;
    }
    #contatoForm input[type="text"],
    #contatoForm input[type="tel"]{ width:calc(50% - 5px); }
    #contatoForm textarea{ width:100%; min-height:80px; }
    #contatoForm button{ width:100%; }
    ```

---

## 🖼️ Galeria – como adicionar imagens

No `galeria.html`, adicione novas imagens **dentro** do contêiner `.galeria`:

```html
<div class="galeria">
  <img class="img-campanha" src="imagens/imagem5.jpeg" alt="Descrição da foto" loading="lazy">
  <!-- Repita quantas precisar -->
</div>
```

A grade se reorganiza sozinha (quebra linha automaticamente).

---

## 📨 Contato – formulário

O layout do formulário no `contato.html` foi **preservado exatamente como o original** (campos Nome/Telefone lado a lado; Mensagem e Botão abaixo).  
Para mudar apenas textos/placeholders, edite o HTML. Para mudar cores, use `--vermelho` no CSS.

---

## 🗺️ Mapa

O bloco de mapa usa `.map-wrap` com proporção 16:9 e borda no tema. Para trocar o endereço, atualize o `src` do `iframe` no `contato.html`.

---

## ♿ Acessibilidade e SEO rápidos

- Use `alt` descritivo nas imagens (principalmente na galeria).
- Mantenha um `<h1>` único por página.
- Inclua `<meta name="description">` (já adicionado como exemplo no `galeria.html`).

---

## 🚀 Publicação (GitHub Pages)

1. Faça **commit/push** para o repositório.
2. No GitHub: **Settings → Pages → Deploy from a branch** → `main` → `/ (root)`.
3. Acesse a URL gerada.

---

## 🧰 Fluxo de commit sugerido

```bash
git status
git add css/style.css galeria.html contato.html
git commit -m "Galeria responsiva + formulário preservado + comentários no CSS"
git push origin main
```

---

## ✅ Checklist de manutenção

- [ ] Adicione novas imagens em `imagens/` e **otimize** o tamanho (≤ 200–300 KB se possível).  
- [ ] Preencha `alt` das imagens.  
- [ ] Evite alterar estilos fora dos blocos comentados.  
- [ ] Teste em mobile (larguras < 400px).

---

## 🗒️ Changelog (exemplo)

- **2025-11-04** – Galeria responsiva com CSS Grid; formulário restaurado; comentários e organização do `style.css`.
