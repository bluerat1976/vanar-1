

function addFlake () {
    let div = document.createElement('div')
    let size= 'lg'

    if(Math.random()<0.25) {
        size = 'sm'
    }

    if(Math.random()> 0.25) {
        size = 'md'
    }

    div.className = `flake ${size}`
    let left = parseInt(Math.random() * innerWidth)
    div.style.left = `${left}px`
    document.body.appendChild(div)

}

setInterval(addFlake, 100)

//innerWidth - width of window of current monitor.
//innerHeight - height of window of current monitor.


function removeFlake() {

    let div2 = document.getElementsByTagName('div')
    for(let i = 0; i<div2.length; i++) {
        if(div2[i].getBoundingClientRect().top > innerHeight) {
            document.body.removeChild(div2[i])
        }      
    }    
};

setInterval(removeFlake, 50);


function quantity() {
    let div3 = document.getElementsByTagName('div')
    console.log(div3.length)
};
setInterval(quantity, 1000)



