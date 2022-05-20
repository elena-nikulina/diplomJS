const scroll = () => {

    const up = document.querySelector('.up');


    up.addEventListener('click', (e) => {
      window.scrollTo(0, 0);
    });

      document.addEventListener('scroll', function() {
        up.hidden = (window.pageYOffset < document.documentElement.clientHeight);

      });
}

export default scroll;