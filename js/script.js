const modeToggle = document.getElementById('modeToggle');
const icon = modeToggle.querySelector('i');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});
