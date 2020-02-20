//################## DATA ####################
// game map in memory
// LEGEND

const EMPTY = 0;
const PACMAN = 1;
const CHERRY = 2;
const BOMB = 3;

let pac_r = 0;
let pac_c = 0;

let map = [
    [1,0,0,0,0,2,0,0,0,0],
    [0,0,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
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
            div.className = 'pacman'
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

function action(where) {
  
    switch(where) {
        case 1:
            event.code == ArrowRight;  
            moveRight();
        break;

        case 2:
            event.code == ArrowLeft;
            moveLeft();
        break;

        case 3: 
            event.code == ArrowDown;  
            moveDown()
        break;

        case 4: 
            event.code == ArrowUp;  
            moveUp()
        break;
    }

    //alert(event.code)
}

// function moveRight moves pacman to the rigt.
function moveRight() {
    map[pac_r][pac_c] = EMPTY;
    pac_c++;
    map[pac_r][pac_c] = PACMAN;
    
    clearMap()
    renderMap()
}

function  moveLeft() {
    map[pac_r][pac_c] = EMPTY;
    pac_c--;
    map[pac_r][pac_c] = PACMAN;
    
    clearMap()
    renderMap()
}

function moveDown() {
    map[pac_r][pac_c] = EMPTY;
    pac_r++;
    map[pac_r][pac_c] = PACMAN;
    
    clearMap()
    renderMap()
}

function moveUp() {
    map[pac_r][pac_c] = EMPTY;
    pac_r--;
    map[pac_r][pac_c] = PACMAN;
    
    clearMap()
    renderMap()
}


clearMap()
renderMap()

document.body.onkeydown = action;