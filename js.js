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
      <p> Hoje, eu falei que eu ia montar uma coisa diferente, aquele alfabeto de elogios pra você, mas, vai ser diferente, seu alfabeto vai ser aquele link ali embaixo, só que não está pronto ainda, e quando estiver é só clicar lá. <br> Mas então, me diz, como você faz para ser tão linda assim? Fez um pacto na encruzilhada?? Ou será que é uma reencarnação da Amara? kkkkkk<br> Só para finalizar, saiba que você é linda coelhinha, e sempre vai ser, é uma joia rara que não tem nem como ser definida, afinal elas nem se comparam com a sua beleza
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

