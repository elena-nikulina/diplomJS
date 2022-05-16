const accordeon = () => {
    //console.log('accordeon');
    const accordeon = document.querySelector('.accordeon');
    const elements = accordeon.querySelectorAll('.element');
    const contents = accordeon.querySelectorAll('.element-content');


    elements.forEach((elem, index1) => {
        //console.log('1');
        elem.addEventListener('click', () => {
            //console.log('2');
            elements.forEach((element, index) => {
                //console.log('3');
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                    contents[index].style.display = 'none';
                }
            });
            
            elem.classList.add('active');
            contents[index1].style.display = 'block';
        });
    });

}

export default accordeon;