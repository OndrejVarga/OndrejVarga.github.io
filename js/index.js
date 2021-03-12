const headerNav = document.querySelector('.header__nav');
const btnHamburger = document.querySelector('.header__nav__hamburger');

btnHamburger.addEventListener('click', () => {
  headerNav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  headerNav.classList.toggle('pekne', window.scrollY > 0);
});

// SLIDING IMAGES IN
const sliders = document.querySelectorAll('.slide-in section');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -250px 0px',
};

const appearOnScroll = new IntersectionObserver(
  (entries, appearOnScrollObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScrollObserver.unobserve(entry.target);
      }
    });
  },
  appearOptions
);

sliders.forEach((slider) => appearOnScroll.observe(slider));
