
let div = document.querySelector('.coin')

function throwCoin() {
 // div.className = 'coin throw'
    div.classList.add('throw')
    div.firstElementChild.classList.add('flip')

}

function clearClass() {
    //div.setAttribute('class', 'coin')
    div.classList.remove('throw')
    div.firstElementChild.classList.remove('flip')
}  

//css animation -> call function.
//div.onanimationend = clearClass; 

div.addEventListener('animationend', clearClass);
document.body.onkeydown = throwCoin;

