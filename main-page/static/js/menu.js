//import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const chat = document.querySelector('.chat')

form.addEventListener('submit', this.handleSubmit.bind(this));
document.addEventListener('DOMContentLoaded', this.getMesagesFromLocalStorage.bind(this))

function getMesagesFromLocalStorage () {
  let messages = localStorage.getItem('messages');
  if (messages == '' || messages == null) {
    return
  } 
  messages = JSON.parse(messages);
  for (let message of messages.all) {
    createMessageBlock(message, save=false);
  }
}

function saveMessageToLocalStorage (message) {
  let messages = localStorage.getItem('messages');
  if (messages == '' || messages == null) {
    localStorage.setItem('messages', JSON.stringify({'all':[]}));
  }
  messages = localStorage.getItem('messages');
  messages = JSON.parse(messages);
  messages.all.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function createMessageBlock (message, save=true) {
    let message_block = document.createElement('div');
    message_block.className = 'message right';
    //message_block.innerText = message.text;
     
    let message_text = document.createElement('div');
    message_text.className = "message-text";
    message_text.innerText = message.text;
    message_block.append(message_text);

    let message_meta = document.createElement('div');
    let message_date = document.createElement('div');
    let message_state = document.createElement('div');
    message_meta.className = "message-meta";

    message_date.className = "message-date";
    message_date.innerText = message.date;
  
    message_state.className = "message-state";
    message_state.innerHTML = "<span class='material-icons'>done_all</span>";

    message_meta.append(message_date);
    message_meta.append(message_state);

    message_block.append(message_meta)
    
    chat.prepend(message_block);
    if (save) {
      saveMessageToLocalStorage(message);
    }
}

function handleSubmit (event) {
    event.preventDefault();
    let time = new Date();
    let message = {
      'text': input.value,
      'date': `${time.getHours()}:${time.getMinutes()}`,
      'sender_name': 'Dmitrii Oreshkin' 
    };
    createMessageBlock(message);
    input.value = '';
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}
