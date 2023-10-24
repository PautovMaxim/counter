const RESET_VISIBLE_CLASSNAME = 'reset_visible';

let buttonAdd = document.querySelector('.add');
let counterText = document.querySelector('.counter')
let buttonReset = document.querySelector('.reset');

let counter = 0;

buttonAdd.addEventListener('click', function() {
    counter += 1;
    counterText.innerText = counter;
})

buttonReset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
})


