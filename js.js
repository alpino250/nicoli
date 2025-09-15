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
  } else {
    alert("Senha incorreta!");
  }
}
