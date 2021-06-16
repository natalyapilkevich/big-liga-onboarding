const loader = () => {
  const MAX_TABLET_WIDTH = 1023;

  const loaderBlock = document.querySelector('.loader');
  const page = document.querySelector('.wrapper');

  if (loaderBlock) {
    loaderBlock.classList.remove('loader--nojs');
    page.classList.remove('wrapper--nojs');

    const onLoaderClick = () => {
      loaderBlock.classList.remove('loader--active');
      page.classList.add('wrapper--show');
    };

    const onLoaderKeydown = (evt) => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        loaderBlock.classList.remove('loader--active');
        page.classList.add('wrapper--show');
      }
    };

    const hideLoader = () => {
      if (window.innerWidth <= MAX_TABLET_WIDTH) {
        window.removeEventListener('keydown', onLoaderKeydown);
        window.addEventListener('click', onLoaderClick);
      } else {
        window.removeEventListener('click', onLoaderClick);
        window.addEventListener('keydown', onLoaderKeydown);
      }
    };

    hideLoader();

    window.addEventListener('resize', hideLoader);
  }

};

export {loader};
