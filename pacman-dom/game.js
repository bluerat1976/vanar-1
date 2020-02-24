//################## DATA ####################
// game map in memory
// LEGEND

const EMPTY = 0;
const PACMAN = 1;
const CHERRY = 2;
const BOMB = 3;

let pac_r = 0;
let pac_c = 0;
let pac_d ='right';
let pac_hp = 200 // zdorovie
let st = document.getElementById('status');
let pac_stat ='';
let pac_aura = '';


let map = [
    [1,0,0,0,0,2,0,0,0,0],
    [3,0,3,0,0,0,0,0,2,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,3,0,0],
    [0,0,0,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

//################### LOGIC #################

function renderMap() {

    for(let row = 0; row < 10; row++ ) {
        for(let col = 0; col<10; col++) {
            renderCell(map[row][col])
        }
    }
      //console.log(map.length) // rows
    //console.log(map[i].length) // colls  
    renderStatus()
}

function renderStatus() {
    st.innerHTML = pac_hp
}

function clearMap()  {
    let div_map = document.getElementById('map');
    
    while(div_map.children.length>0) {
        div_map.removeChild(div_map.children[0])
    }
}

function renderCell(what) {
    let div_map = document.getElementById('map');

    let div = document.createElement('div');
    
    switch(what) {
        case 1: 
            div.className = `pacman ${pac_d} ${pac_stat} ${pac_aura}`
        break;
        case 2:  
            div.className = 'cherry'
        break;
        case 3:
             div.className = 'bomb'
        break;
    }
    
    div_map.appendChild(div);

    //console.log(div)
}

function action(event) {
    map[pac_r][pac_c] = EMPTY;
    switch(event.code) {
        case 'ArrowRight':
            moveRight();
        break;

        case 'ArrowLeft':
            moveLeft();
        break;

        case 'ArrowDown':  
            moveDown()
        break;

        case 'ArrowUp':  
            moveUp()
         break;
    }
    map[pac_r][pac_c] = PACMAN;
    clearMap()
    renderMap()
    //alert(event.code)
}

function checkBomb() {
    if(map[pac_r][pac_c] == BOMB) {
            pac_hp -= 50;
            pac_stat = 'exploding'
            setTimeout(function(){pac_stat = ''
            clearMap()
            renderMap()
        
        }, 1000)
      
    }
}

function checkCherry() {
    if(map[pac_r][pac_c] == CHERRY) {
        pac_hp += 10;
        pac_stat = 'aura';
        setTimeout(function(){pac_stat = ''
        clearMap()
        renderMap()
    }, 1000)
    }
}

// function moveRight moves pacman to the rigt.
function moveRight() {
    if(pac_c < 9) {
        pac_c++;
        checkBomb()
        checkCherry()
    }
    pac_d = 'right'
}

function  moveLeft() {
    if(pac_c > 0) {
        pac_c--;
        checkBomb()
        checkCherry()
    }
    pac_d = 'left'
}

function moveDown() {
    if(pac_r < 9) {
        pac_r++;
        checkBomb()
        checkCherry()
    }
    pac_d = 'down'
}

function moveUp() {
    if(pac_r >0) { 
        pac_r--;
        checkBomb()
        checkCherry()
    }

    pac_d = 'up'
}

clearMap()
renderMap()

document.body.onkeydown = action;