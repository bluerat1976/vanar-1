class Ball {
    constructor() {
        //create 'div' of ball and remember(keep it ) it in object - div 
        this.div = document.createElement('div')
        this.div.className = 'ball'

        this.speadA = -10 +Math.random() * 20
        this.angle = Math.random() * 360
        this.div.style.transform = `rotate(${this.angle}deg)`
        this.left = parseInt(Math.random() * innerWidth)
        this.div.style.left = this.left + 'px'
        this.max_height = parseInt(Math.random() * innerHeight * 0.8)
        //this.div.style.bottom = '100px' works
        this.height = this.max_height
        this.speadY = -1
        this.speadX = -2 + Math.random() *4
        this.div.style.bottom = this.height + 'px'
        this.div.addEventListener('click', ()=> {
            alert()
        })
    }

    render(parent) {
        parent.appendChild(this.div)
    }

    fall() {
        //setInterval(function(){this.height --; console.log(this.height) }, 500)
        //arrow function solves THIS!!! problems.
        this.timer = setInterval(() => {
            if(this.left <= 0 || this.left >= innerWidth) {
                this.speadX *= -1
            }

           this.left += this.speadX
           this.speadX *= 0.999
           this.div.style.left = this.left + 'px'
           
           this.angle +=this.speadA
           this.speadA *= 0.999
           this.div.style.transform = `rotate(${this.angle}deg)`
           

            if(this.speadY<0) {
                this.speadY *= 1.021
            }

            if(this.speadY>0) {
                this.speadY *= 0.975
            }

            this.height += this.speadY ; //console.log(this) 
        
            this.div.style.bottom = this.height + 'px'
            
            if(this.height <= 0) {
                this.speadY *= -1
                //alert()
                this.max_height *=0.7
            }

            if(this.height >= this.max_height) {
                this.speadY *= -1   
            }

            if(this.max_height <=3 ) {
                clearInterval(this.timer)
            }
            
        }, 20)     

        }
}

////////////////////////////

let quantity = 20

while(quantity >= 0) {
    let b = new Ball()
    b.render(document.body)
    b.fall()
    quantity --
}