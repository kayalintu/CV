// import Typed from 'typed.js';
//
// var options = {
//     strings: ["Привет", "fsdgrf!", "sdfdsgdrfh!"],
//     typeSpeed: 40
// };
//
// var typed = new Typed("#typed", options);

/**
 * Navigation
 */

// get all elements with data-id
let links = document.querySelectorAll('[data-id]');
console.log(links);

for(var i = 0; i < links.length; ++i) {
    var item = links[i];
    console.log(item);

}

// Array.prototype.forEach.call(links, function(el, i){
//     let $id = '#' + this.getAttribute('data-id');
//     console.log($id);
// });
//



