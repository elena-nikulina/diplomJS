const slider = () => {
    
    const sliderBlock = document.querySelector('.top-slider');
    const slides = sliderBlock.querySelectorAll('.item');
    const tables = sliderBlock.querySelectorAll('.table');
    const timerInterval = 3000;
    let currentSlide = 0;
    let interval;
    
    slides[0].classList.add('item-active');
    
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'item-active');
        prevSlide(tables, currentSlide, 'active');
        //console.log('start');
        //prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
       
        nextSlide(slides, currentSlide, 'item-active');
        nextSlide(tables, currentSlide, 'active');
        //nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlide = (timer = 1500) => {
        /*console.log('!!!');*/
        interval = setInterval(autoSlide, timer);
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    startSlide(timerInterval);
}

export default slider;