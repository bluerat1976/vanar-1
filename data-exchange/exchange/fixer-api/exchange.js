const KEY ='c6ee91e4ed90c31fcfc3d18042c61d2c'
const ENDPOINT = 'http://data.fixer.io/api/latest'
let data = {}


let loadData = () => {
    
    //alert()
    //  1. 
    let xhr = new XMLHttpRequest

    // 2. 
    xhr.open('GET', ENDPOINT + "?access_key=" + KEY)

    xhr.onload =() => {
        let response = xhr.responseText
        data = JSON.parse(response)

        
        //console.log(response)
        console.log(data.rates.USD)
    }

    // url?param....

    // 3. send
    xhr.send()
}

// при нажатии кнопки "Calculate" пересчитать молд. леи в евро взяв курс с сайта.