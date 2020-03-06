const KEY = 'PjjKdKOheX26vfsTNeRizKjrLbqQd6kyE1CBv6gf'


let neo_endpoint = 'https://api.nasa.gov/neo/rest/v1/feed'
let data = {}


  let find =() => {
    
    let s = document.getElementById('start_data')
    let e = document.getElementById('end_data')
    let res = document.getElementById('result')
    document.body.appendChild(res)

    let start_data = s.value
   
    let end_data = e.value

    let url = neo_endpoint +'?api_key=' + KEY
    if(start_data != '') url += '&start_data=' + start_data
    if(end_data != '') url += '&end_data=' + end_data
    

//console.log (url)

    let xhr = new XMLHttpRequest

    xhr.open('GET', url)
    
    xhr.onload =() => {
        let inf = xhr.responseText
        data = JSON.parse(inf)

       console.log(data)
    /*
        let box = document.createElement('h2')
    box.innerHTML = data
*/

        let data_for_diagram = [
            {
                x: [], //dates
                y: [], //langth
                type: 'bar'
            }
        ]

    for( let day in data.near_earth_objects) {
        console.log(day, data.near_earth_objects[day].length )
        let d = document.createElement('li')
        d.innerHTML = day + '-----' + data.near_earth_objects[day].length
        res.appendChild(d)

        data_for_diagram[0].x.push(day)
        data_for_diagram[0].y.push(data.near_earth_objects[day].length)

        }

        console.log(data_for_diagram)
        Plotly.newPlot('diagram', data_for_diagram)

    }



    xhr.send()


    //let start data
    // let end data
    
}