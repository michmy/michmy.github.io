import animateScrollTo from 'animated-scroll-to'
import './../../css/default.less'

function scrollTo(e) {
    
    animateScrollTo(document.getElementById(this.getAttribute('data-target')).offsetTop)
    e.preventDefault()
}
function scrollToTop(e) {
    
    animateScrollTo(0)
    e.preventDefault()
}

function scrollListener() {

    let ticking = false,
        last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            
            if (last_known_scroll_position > 0) {
                document.getElementById('js-link-top').classList.add('show')
            }
            else {
                document.getElementById('js-link-top').classList.remove('show')
            }

            ticking = false;
        });
    }
    ticking = true;
}
    
document.getElementById('js-link-work').addEventListener('click', scrollTo);
document.getElementById('js-link-top').addEventListener('click', scrollToTop);
window.addEventListener('scroll', scrollListener)