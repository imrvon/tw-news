const menu = document.querySelector('#menu');
const toggle = document.querySelector('#toggle');
const close = document.querySelector('#close');

toggle.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        toggle.style.display = 'none';
        close.style.display = 'block'
    } else {
        menu.classList.add('hidden');
    }
})

close.addEventListener('click', () => {
    toggle.style.display = 'block';
    close.style.display = 'none'
    menu.classList.add('hidden');
})