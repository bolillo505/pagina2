(function() {
    const sliders = document.querySelectorAll('.testimony__body');
    let value = 0;
  
    document.querySelector('#next').addEventListener('click', () => changePosition(1));
    document.querySelector('#before').addEventListener('click', () => changePosition(-1));
  
    function changePosition(add) {
      sliders[value].classList.remove('testimony__body--show');
      value = (value + add + sliders.length) % sliders.length;
      sliders[value].classList.add('testimony__body--show');
    }
  })();