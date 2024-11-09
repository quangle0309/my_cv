const navbar = document.querySelector('.navbar-main');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        navbar.classList.remove('navbar-hidden');
    } else {
        navbar.classList.add('navbar-hidden');
    }
})


function setLanguage (language) {
    const elements = document.querySelectorAll("[data-vi][data-en]");
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${language}`)
    })
    localStorage.setItem("language", language);
}

window.onload = function () {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
}