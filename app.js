let color = 'black';
let button = document.querySelector('#button');
let buttonBackground = document.querySelector('#button-background');


// button.addEventListener('click', () => {
//     if (color === 'black') {
//         color = 'white';
//         buttonBackground.style.backgroundColor = 'black';
//     } else {
//         color = 'black';
//         buttonBackground.style.backgroundColor = 'white';
//     }
// })

// another way to do it:

button.addEventListener('click', () => {
    console.log(buttonBackground.classList);
    buttonBackground.classList.toggle('background');
});

let canvas = document.querySelector('canvas');

console.dir(canvas);
canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// console.dir(window);
// console.dir(canvas);
// console.log(document.body.style);
let ctx = canvas.getContext('2d');
ctx.fillRect(10, 10, 100, 100);
ctx.fillRect(120, 10, 100, 100);
ctx.fillRect(230, 20, 100, 100);



