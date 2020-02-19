let div  = document.body.firstElementChild.firstElementChild;
let box = document.getElementById('form-box')
let boxName = document.createElement('h3')
let q = document.createElement('h4')

/*
(doesn't work)
let div  = document.body.firstElementChild.firstElementChild.getAttribute('placeholder');
*/

div.addEventListener('keyup', checkName)
div.addEventListener('keyup', quant)

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
   
   /* (Works, but not good performance. Client wouldn't like this) 
   div = prompt('Input something')
    alert(div.length)

    for (let i =0; i < div.length; i++) {
        if (div[i] == ' ' && div.length>=5) {
            let div2  = document.body.firstElementChild.lastElementChild;
            div2.removeAttribute('disabled')
        }   
    }
    */

   for (let i =0; i < div.value.length; i++) {

        if (div.value[i] == ' ' && div.value.length>=5) {
        let div2  = document.body.firstElementChild.lastElementChild;
        div2.removeAttribute('disabled')
        }   
    }  
    //console.log(quantity)
}


/*
(work by themselves, but second field stay disabled)

function quant() {
    box.appendChild(boxName).innerHTML = 'Quantity of figures';
    box.appendChild(q).innerHTML = div.value.length;
}
*/

