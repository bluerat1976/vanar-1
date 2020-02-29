let showForm = () => {
    let form = `
        <form>
         <label>
            What is your name?
            <input id='inp'type='text' placeholder='your name here...'>
        </label>
        <button onclick='saveData()'> Save </button>
        </form>
    `
    let div = document.getElementById('content')
    div.innerHTML = form
}

let saveData = () => {
    let a = document.getElementById('inp');
    let name = a.value;

   let user = { name: name } // {name: 'Tania'}
    //localstorage -> 'user'

    localStorage.setItem('user', JSON.stringify(user))
}

let showGreeting = ()=> {
    // 1. let user <=== localstorage
    // 2.let name <=== user
   let us = JSON.parse(localStorage.getItem('user'))
    
   alert(us.name)

   let hel = document.getElementById('content');
   let b = ` <h1> Hello ${us.name} username </h1>`
   hel.innerHTML = b
  
}
showForm()
showGreeting()



