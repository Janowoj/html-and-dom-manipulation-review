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
})


