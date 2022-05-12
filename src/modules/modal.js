const modal = () => {
    const modal1 = document.querySelector('.modal-callback');
    const overlay = document.querySelector('.modal-overlay');
    const callbackBtn = document.querySelectorAll('.callback-btn');
    const modalClose = modal1.querySelector('.modal-close');

    //let isOpen = false;

    //console.log(modal1);
    //console.log(overlay);
    //console.log(callbackBtn);
    console.log(modalClose);

    for(let btn of callbackBtn) {
        if (btn.classList.contains('fancyboxModal')) {
            btn.classList.remove('fancyboxModal');
        }
        btn.addEventListener('click', () => {
            //isOpen = true;
            console.log('click');
            modal1.style.display = 'block';
            overlay.style.display = 'block';
        });

       
    }

    
        modalClose.addEventListener('click', () => {
            console.log('none1');
            modal1.style.display = 'none';
            overlay.style.display = 'none';
        });
    
        overlay.addEventListener('click', () => {
            modal1.style.display = 'none';
            overlay.style.display = 'none';
        });
    
    

    
}

//module.exports = twoModule;
export default modal;