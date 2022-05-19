const scroll = () => {
    //console.log('scroll');
    const up = document.querySelector('.up');
    console.log(up);

    up.onclick = function() {
        window.scrollTo(pageXOffset, 0);
        // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
      };

      window.addEventListener('scroll', function() {
        up.hidden = (pageYOffset < document.documentElement.clientHeight);
        behavior = 'smooth';
      });
}

export default scroll;