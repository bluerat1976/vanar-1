let volume = 50

let screen = document.getElementById('player').firstElementChild;
let slider = document.getElementById('player').children[1].children[1];
    
function render(){
   
    screen.value = volume
    slider.value = volume
}

function up(){
   volume++
   render()
}

function down(){
    volume--
    render()
}

function change(){

    screen.value = slider.value      

//render()   
 
} 