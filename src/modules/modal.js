const modal = () => {
    const modal1 = document.querySelector('.modal-callback');
    const overlay = document.querySelector('.modal-overlay');
    const callbackBtn = document.querySelectorAll('.callback-btn');
    const modalClose = modal1.querySelector('.modal-close');
    const buttonServices = document.querySelector('.button-services');

    //let isOpen = false;
    console.log(buttonServices);
    //console.log(modal1);
    //console.log(overlay);
    //console.log(callbackBtn);
    //console.log(modalClose);
    buttonServices.classList.remove('fancyboxModal');

    buttonServices.addEventListener('click', () => {
        modal1.style.display = 'block';
        overlay.style.display = 'block';
    });

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