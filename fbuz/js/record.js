document.addEventListener('change',e => {
    let option = [...document.querySelectorAll('[name="option"]:checked')].map(e => +e.value), sum = 0;
    e.target.name == 'option' ? option.length > 0 ? sum = option.reduce((a,b) => a + b) : sum = 0 : 0;
    document.querySelector('.res').textContent = `${sum} руб.`;
});