import animateScrollTo from 'animated-scroll-to';

function scrollTo() {
  console.log(this.getAttribute(href))
}

document.getElementById('js-link-work').addEventListener('click', scrollTo);