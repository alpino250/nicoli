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
      <p>Hoje eu ia falar algo mais a sua cara, ou seja, alguma coisa que parecesse tão linda e perfeita quanto você, mas, eu acho que você já sabe isso né? <br> Pórem, eu vou te falar que você é a gostosa, sexy, sensual, linda, engraçada, tem um sorriso que faz eu me perder em todos meus pensamentos, olhos que prendem minha própria alma que eu trocaria facilmente por você e acima disso tudo,é a garota única e especial que eu sempre vou me importar e cuidar. ent vai e aproveita seu dia sua tarada sexy kkkkkkkk. <br> Como não pensei numa foto só pra por, fiz uma mini montagem minha e sua kkkkkk, espero que goste kkkkk
      </p>

      <img src="nini.jpg" alt="Foto secreta" class="secret-img">

      <p style="margin-top:10px;">
        <a href="https://exemplo.com" target="_blank" class="secret-link">
          ainda não...
        </a>   
      </p>
    `;
  } else {
    message.style.display = "block";
    message.innerHTML = "<p style='color:red;'>Senha incorreta! Tente novamente.</p>";
  }
}
