const KEY ='73994592940bf450bc5a26d62749fc41'
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather'
document.body.style.marginTop = '30px'
let pict;
let data = {}
let sity;
let btn = document.createElement('button')
btn.innerHTML = 'Clic to know weather forecast'
document.body.appendChild(btn)
btn.addEventListener ('click', loadData)

let inp = document.createElement('input')
inp.setAttribute('type', 'text')
inp.setAttribute('placeholder', 'Enter location')
document.body.appendChild(inp)
inp.style.marginLeft = '20px'

let ent = document.getElementById('enter')
let box = document.createElement('div')


document.body.appendChild(box)

box.style.backgroundColor = '#cccccc'
box.style.width = '340px'
box.style.height = '260px'
box.style.textAlign = 'center'
box.style.marginTop = '30px'
box.style.paddingTop = '10px'


let tittle = document.createElement('h1')

tittle.innerHTML = 'Place anf forecast'
box.appendChild(tittle)
let result = document.createElement('h2')
box.appendChild(result)

function loadData() {
    sity = inp.value 
    

    fetch(ENDPOINT + "?appid=" + KEY + "&q=" + `${sity}` + "&units=metric")
        .then((response)=> {
        return response.json();

        })
        .then((data)=>{
        console.log(data)

            // -> HTML
            // + use fetch + DOM(createElement, apendChild)
            //alert(data.weather[0].icon)
           

        let ic = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        
        result.innerHTML = (data.name + ' ' + data.main.temp)
        pict = document.createElement('img')

        pict.style.border = '1px solid #aaaabb'
        pict.style.marginLeft = '20px'
        pict.style.backgroundColor = '#ffffff'

        pict.src = ic
       
        result.appendChild(pict)

    })

}