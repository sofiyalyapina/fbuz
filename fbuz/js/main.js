let bg = document.querySelector('.bg_par');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
});