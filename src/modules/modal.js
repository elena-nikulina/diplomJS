const modal = () => {
    const modal1 = document.querySelector('.modal-callback');
    const overlay = document.querySelector('.modal-overlay');
    const callbackBtn = document.querySelectorAll('.callback-btn');

    console.log(modal1);
    console.log(overlay);
    console.log(callbackBtn);

    for(let btn of callbackBtn) {
        if (btn.classList.contains('fancyboxModal')) {
            btn.classList.remove('fancyboxModal');
        }
        btn.addEventListener('click', () => {
            
            console.log('click');
            modal1.style.display = 'block';
            overlay.style.display = 'block';
        });
    }
}

//module.exports = twoModule;
export default modal;