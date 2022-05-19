const scroll = () => {

    const up = document.querySelector('.up');


    up.onclick = function() {
        window.scrollTo(pageXOffset, 0);

      };

      window.addEventListener('scroll', function() {
        up.hidden = (pageYOffset < document.documentElement.clientHeight);

        up.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
          });
      });
}

export default scroll;