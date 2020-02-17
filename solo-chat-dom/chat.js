
// 1) Shadow DOM
let messageInput = document.getElementById('message-input')
let btn = document.getElementById("button-send")
let messageList = document.getElementById('messages-list')
let messageForm = document.getElementById('message-form')


// 2) Action
function typing() {
    // trim() -remove useles amptyes
    if(messageInput.value.trim().length >= 1 ) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', true)
    }
} 

function send() {
    // process message 
    let message = messageInput.value;
    message = message.replace(":)", "<img src='icon-3.png'>")

   //1.  meesage value -message-form> HTML template.  
    let html = 
        `<li class="w3-bar">
        <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span>
        <img src="avat.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
        <div class="w3-bar-item">
          <span class="w3-large">Jane</span><br>
          <span>${message}</span>
        </div>
      </li>`
   // 2. HTML -> messagemessage-form list

   messageList.innerHTML += html
}

// 3. clear input


// 3)Event handling
messageInput.onkeyup = typing;
btn.onclick = send;
messageForm.onsubmit = function() {
    event.preventDefault()
    //if
    if(messageInput.value.trim().length >= 1 ) {
        send()
    }
    //messageInput.value = ''

    
}