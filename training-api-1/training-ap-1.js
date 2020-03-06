let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = fetch(url);

let commits = response.json(); // читаем ответ в формате JSON

console.log(commits);

/*
const KEY ='73994592940bf450bc5a26d62749fc41'
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather'
let data = {};
let btn = document.createElement('button')
document.body.appendChild(btn)
btn.innerHTML = 'Clik'
btn.addEventListener('click', loadData)
let city = 'Chishinau'
let result = document.createElement('h2')
document.body.appendChild(result)



function loadData() {

    fetch(ENDPOINT + "?appid=" + KEY + "&q=" + `${city}`)
        .then((response)=> {
        return response.json()

        })
        .then((data)=>{
        console.log(data)
        result.innerHTML = (data)

        })
}
*/