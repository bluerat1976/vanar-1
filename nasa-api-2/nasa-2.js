const KEY = 'fsgatdTCuNWkVDb02F4Kb3GeHwwZXhN6ErcoVrgp';
const ENDPOINT = 'https://api.nasa.gov/neo/rest/v1/feed';

let data = {};
let days = document.getElementById('inp')
let date = input.value
let pictsbox = document.getElementById('box')
let link= document.createElement('link')




let dataLoad = () => {
    //let dat = input.value

    let xhr = new XMLHttpRequest()

    xhr.open('GET', ENDPOINT + '?api_key=' + KEY);

    xhr.onload = () => {
        let response = xhr.responseText;
        data = JSON.parse(response)
        //console.log(data.element_count)
        pictsbox.innerHTML = data.element_count
 
    }

    xhr.send()
}
 
        
       


