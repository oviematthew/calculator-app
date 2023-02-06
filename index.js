const display = document.getElementById('screen');

const clearScreen = () => {
    display.value = '';
}


const negate = () => {
    display.value = eval(-1 * display.value);
}

const percentage = () => {

    display.value = eval(display.value / 100)
}



const show = (attribute) => {
    display.value += attribute;
}



const calc = ()  => {
    display.value = eval(display.value);
}