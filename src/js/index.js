import Typed from 'typed.js';

let options = {
    strings: ["Catherine Lev", "Frontend Developer"],
    typeSpeed: 40
};

let typed = new Typed("#typed", options);

/**
 * Navigation
 */

// get all links in nav
let nav = document.querySelectorAll('.links');

nav.forEach(element => {
    element.addEventListener('click', (e) => {
    const sectionClass = e.target.getAttribute("href").replace('#', '');
document.querySelectorAll('.section').forEach(t => {
    t.classList.remove('active');
});
const section = document.querySelector(`.${sectionClass}`);

if (!section) {
    return;
}
section.classList.toggle('active');
});
});
//
// const navs = document.querySelectorAll("[data-nav]");
// const location = window.location;
//
// function setActive(link, {pathname, href}, parent = "false", activeClass ="active") {
//     const active = (href.indexOf(link.getAttribute("href")) != -1 && link.getAttribute("href") !== '/') || (link.getAttribute("href") === pathname);
//     let classElement = link;
//     if (parent && link.parentElement) {
//         classElement = link.parentElement;
//     };
//     if (!active) {
//         classElement.classList.remove(activeClass);
//         return;
//     }
//
//     classElement.classList.add(activeClass);
// }
//
// navs.forEach((nav) => {
//     const links = nav.querySelectorAll('a');
//     links.forEach(a => setActive(a, location, true));
// });