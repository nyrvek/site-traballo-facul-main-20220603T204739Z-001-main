const botao_menu = document.getElementById('botao_menu');

function tooglemenu(event){
    if (event.type ==='touchstart') event.preventDefault();
    const nav_menu = document.getElementById('nav_menu');   
    nav_menu.classList.toggle('active');
}
botao_menu.addEventListener('click', tooglemenu)
botao_menu.addEventListener('touchstart', tooglemenu)