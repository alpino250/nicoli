const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
const pageTitle = document.getElementById('page-title');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById(`tab-${btn.dataset.tab}`);
    target.classList.add('active');

    pageTitle.textContent = btn.dataset.title;
  });
});

function checkPassword() {
  const input = document.getElementById('password').value;
  const message = document.getElementById('secret-message');

  if (input === "0912") {
    message.style.display = "block";

    // conteúdo liberado
    message.innerHTML = `
      <p> Finalmente, está tudo pronto! eu espero que goste nic</p>

      <img src="nini.jpg" alt="Foto secreta" class="secret-img">

      <p style="margin-top:10px;">
        <a href="https://alpino250.github.io/elogios/"_blank" class="secret-link">
          nic, está pronto ❤️
        </a>   
      </p>
    `;
  } else {
    message.style.display = "block";
    message.innerHTML = "<p style='color:red;'>Senha incorreta! Tente novamente.</p>";
  }
}




