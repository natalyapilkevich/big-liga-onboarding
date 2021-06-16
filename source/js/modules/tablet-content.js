const tabletContent = () => {
  const MAX_TABLET_WIDTH = 1023;

  const content = document.querySelector('.wrapper');
  const description = document.querySelector('.main__description');
  const headerLogo = document.querySelector('.header__logo');
  const headerLogoSvg = document.querySelector('.header__logo svg');

  if (description) {
    const onContentClick = (evt) => {
      if (evt.target.parentElement !== headerLogo && evt.target.parentElement !== headerLogoSvg) {
        description.classList.toggle('main__description--clicked');
      }
    };

    const toggleContent = () => {
      if (window.innerWidth <= MAX_TABLET_WIDTH) {
        content.addEventListener('click', onContentClick);
      }
    };

    const checkWidth = () => {
      if (window.innerWidth > MAX_TABLET_WIDTH) {
        content.classList.remove('main__description--clicked');
        content.removeEventListener('click', onContentClick);
      } else {
        content.addEventListener('click', onContentClick);
      }
    };

    toggleContent();

    window.addEventListener('resize', checkWidth);
  }
};

export {tabletContent};
