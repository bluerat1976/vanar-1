class LikeButton {

    constructor( element , likes = 0 ){
        this.likes = likes;
        this.element = element;
        this.element.addEventListener('click', this.like.bind(this) ) 
    }

    like(){
        this.likes++;
        this.render();
        console.log(this.likes)
    }

    render(){
         
        if(this.likes == 0) {
            this.element.innerHTML = `Likes!: ${this.likes}`
        } else if(this.likes >= 1 && this.likes <= 6) {
            this.element.innerHTML = `100 Likes: ${this.likes}`
        } else if(this.likes > 6 && this.likes <= 12) {
            this.element.innerHTML = `10.5k Likes: ${this.likes}`
        } else {
            this.element.innerHTML = `1T Likes: ${this.likes}`
        }
        
       /* doesn't work short condition writing. 
       
       if(this.likes == 0) {
            this.element.innerHTML = `Likes!: ${this.likes}`
        } else if( 1<= this.likes < 6 ) {
            this.element.innerHTML = `100 Likes: ${this.likes}`
        } else if( 6 <= this.likes <= 12 ) {
            this.element.innerHTML = `10.5k Likes: ${this.likes}`
        } else {
            this.element.innerHTML = `1T Likes: ${this.likes}`
        }
        */
    }
}

//this.element.innerHTML =`Likes: ${this.likes}`