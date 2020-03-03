let loadPage = (page) => {
    
    //alert(a);

    // 1. prepare new request 
    let xhr = new XMLHttpRequest()

    // 2. prepare conection
    xhr.open('GET', `pages/${page}.html`)

    

    // 2-a. when data loaded
    xhr.onload =() => {
        // data
    //alert(xhr.responseText)
    //div#content < responce
    
    let div = document.getElementById('content')
    div.innerHTML = xhr.responseText
    

    }

    //3. send request
    xhr.send()

    

}

