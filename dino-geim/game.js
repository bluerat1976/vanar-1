// data of the map
// 0- empty 
// 1 - cactus
// 2 - meat
// 9 - rex

const EMPTY = 0
const CACTUS = 1
const MEAT = 2
const REX = 9


let data = [9,0,0,0,0,0,0,1,0,0]

function renderMap() {
    let lend = document.getElementById('land')
    for(let i =0; i<data.length; i++) {

        let div = document.createElement('div')

        if(data[i] == REX) {
            div.className = 'dino'
        
        } else if(data[i] == CACTUS) {
            div.className = 'cactus'

        }  else if(data[i] == MEAT) {
            div.className = 'meat' 
        
        }else if(data[i] == EMPTY) {
            div.className = 'empty'   
        }
    
        lend.appendChild(div)
    }   
}


function clearMap() {
    let lend = document.getElementById('land')
    
   /*
    let div = document.getElementsByTagName('div')
    for(let i=0; i<data.length; i++) {
        if(data[0] == div) {
            lend.removeChild(div)
        }  
    }
    */
   
    lend.innerHTML = ''
    // for + .removeChild()
}

clearMap()


function move()  {
    // remove second value(square) from 'data'.
    data.splice(1,1)

    if(Math.random()<0.3) {
         data.push(1)
    } else if(Math.random() < 0.3 ){
        data.push(2)
    } else {
        data.push(0)
    }
}

function jump() {
    alert();
}



renderMap()

setInterval(function(){
    move()
    clearMap()
    renderMap()
}, 1000)