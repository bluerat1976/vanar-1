let div  = document.body.firstElementChild.firstElementChild;

/*
(doesn't work)
let div  = document.body.firstElementChild.firstElementChild.getAttribute('placeholder');
*/

div.addEventListener('keyup', checkName)

function checkName(){
   
    /*
    (doesn't work)
    console.log(div.getAttribute('placeholder').length)
    */

    /*
    (doesn't work)
    let letters = div.('placeholder')
    console.log(letters.length)
    */

    /*
    (doesn't work)
    1) div.getAttribute('placeholder) = prompt('Input something')
    2) div.getAttribute('placeholder').innerHTML = prompt('Input something')

    */
   
   div = prompt('Input something')
    alert(div.length)

    for (let i =0; i < div.length; i++) {
        if (div[i] == ' ' && div.length>=5) {
            let div2  = document.body.firstElementChild.lastElementChild;
            div2.removeAttribute('disabled')
        }   
    }
}