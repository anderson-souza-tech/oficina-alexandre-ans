# ANS — Restauração Automotiva

Site estático e responsivo da ANS: **Home**, **Sobre**, **Galeria** e **Contato**.

## 🔗 Site (GitHub Pages)
Acesse: https://anderson-souza-tech.github.io/oficina-alexandre-ans/

## 📁 Estrutura
/
├─ css/style.css
├─ js/includes.js # inclui header/footer
├─ js/script.js # envio do formulário (Formspree) com feedback na mesma página
├─ partials/header.html
├─ partials/footer.html
├─ imagens/ # coloque suas imagens aqui
├─ index.html
├─ sobre.html
├─ galeria.html
└─ contato.html

markdown
Copiar código

## 🚀 Como rodar local
- Clique duas vezes no `index.html` (o menu aparece por fallback), **ou**
- Use um servidor local (ex.: Live Server no VS Code / Cursor).

## 📨 Formulário
Envio via Formspree. Ao enviar, a página mostra:
> ✅ Mensagem enviada com sucesso! Em breve retornaremos seu contato.

## ♿ Acessibilidade & SEO
- `aria-current="page"` para link ativo
- `meta description` por página
- `alt` descritivo nas imagens
Commit rápido do README
No terminal dentro do projeto:

bash
Copiar código
git add README.md
git commit -m "docs: adiciona README com instruções e link do Pages"
git push
Dicas finais
Para cada alteração futura:

bash
Copiar código
git add .
git commit -m "descrição da mudança"
git push