let a = 0;
document.getElementById('modeBtn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (a == 0) {
        this.textContent = 'Light mode'
    } 
    else {
        this.textContent = 'Dark mode'
    }
});