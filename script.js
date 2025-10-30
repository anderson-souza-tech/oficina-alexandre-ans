(function () {
  const form = document.getElementById('contatoForm');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('btnEnviar');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Enviando...';
    status.className = 'form-status is-loading';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        status.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
        status.className = 'form-status is-success';
      } else {
        const json = await res.json().catch(() => ({}));
        const msg = (json && json.errors)
          ? json.errors.map(e => e.message).join(' ')
          : 'Não foi possível enviar. Tente novamente.';
        status.textContent = msg;
        status.className = 'form-status is-error';
      }
    } catch (err) {
      status.textContent = 'Falha de conexão. Verifique sua internet e tente novamente.';
      status.className = 'form-status is-error';
    } finally {
      btn.disabled = false;
    }
  });
})();
