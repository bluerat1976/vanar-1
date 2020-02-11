function addFlake () {
    let div = document.createElement('div')
    let size= 'lg'

    if(Math.random()<0.25) {
        size = 'sm'
    }

    if(Math.random()> 0.25) {
        size = 'md'
    }

    div.className = `flake ${size}`
    let left = parseInt(Math.random() * innerWidth)
    div.style.left = `${left}px`
    document.body.appendChild(div)
}

setInterval(addFlake, 100)

//innerWidth - width of window of current monitor