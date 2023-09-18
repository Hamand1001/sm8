let button = document.querySelector('.button')
button.addEventListener('click',function(){
    button.style.background = "yellow"
})
let button2 = document.querySelector('.button2')
button2.addEventListener('mousedown',function(){
    button2.style.background = "black"
    button2.style.color = "white"
})
let button3 = document.querySelector('.button3')
button3.addEventListener('mouseup',function(){
    button3.style.background = "green"
})
let button4 = document.querySelector('.button4')
button4.addEventListener('mouseover', function(){
    button4.style.background = 'black';
    button4.style.color = 'white';

})
let button5 = document.querySelector('.button5')
button5.addEventListener('mouseout', function(){
    button5.style.background = 'blue';
})
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    move.style.backgroundColor = "#" + randomColor;
    modalblock.style.backgroundColor = "#" + randomColor;
    move.style.height = "25vh";
    move.style.width = "25vw";
}

let move = document.querySelector('.move')
move.addEventListener('mousemove', setBg)