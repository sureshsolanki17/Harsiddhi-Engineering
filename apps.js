// for sticky navigation bar
window.addEventListener('scroll', function () {
    let navBar = document.querySelector('#navbar');
    if (window.pageYOffset >= 30) {
        navBar.classList.add("navbar-js");
    } if (window.pageYOffset <= 30) {
        navBar.classList.remove("navbar-js");
    }
});
// ----------
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight) / dividend
    );
};
  
const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight)
    );
};
  
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};
  
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
        displayScrollElement(el);
    } else if (elementOutofView(el)) {
        hideScrollElement(el);
    };
    });
};
  
window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});