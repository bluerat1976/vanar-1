const KEY ='73994592940bf450bc5a26d62749fc41'
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather'
let pict;
let data = {}
let sity = 'Chisinau'
let div = document.getElementById('box')
let pl = document.getElementById('place')
let c = document.getElementById('ct')


let loadData = () => {
    
    //alert()
    //  1. 
    let xhr = new XMLHttpRequest

    sity = pl.value
    
    // 2. 
    xhr.open('GET', ENDPOINT + "?appid=" + KEY + "&q=" + `${sity}` + "&units=metric" )

    xhr.onload =() => {
        let response = xhr.responseText
        data = JSON.parse(response)
        
        //div.innerHTML = () 
        //alert(data.weather[0].icon)

        let ic = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        c.innerHTML = (data.name + ' ' + data.main.temp)
        pict = document.createElement('img')
        pict.src = ic
       
        c.appendChild(pict)
    }

    // url?param....

    // 3. send
    xhr.send()
}

//