const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const chat = document.querySelector('.chat')
const back_button = document.querySelector('.back-button')

form.addEventListener('submit', handleSubmit.bind(this));
document.addEventListener('DOMContentLoaded', getMesagesFromLocalStorage.bind(this))
back_button.addEventListener('click', goToMainPage.bind(this))

function goToMainPage(event) {
  // заглушка
  window.location.href = '../main-page/index.html';
}

function checkLocalStorageAvailable() {
  try {
    localStorage.setItem('test', 'text');
    localStorage.getItem('test');
  } catch (err) {
    return false;
  }
  return true;
}

function getMesagesFromLocalStorage () {
  if (!checkLocalStorageAvailable) {
    return
  }
  let messages = localStorage.getItem('messages');
  if (!messages) {
    return
  } 
  messages = JSON.parse(messages);
  for (let message of messages.all) {
    createMessageBlock(message, save=false);
  }
}

function saveMessageToLocalStorage (message) {
  if (!checkLocalStorageAvailable) {
    return
  }
  let messages = localStorage.getItem('messages');
  if (messages == '' || messages == null) {
    localStorage.setItem('messages', JSON.stringify({'all':[]}));
  }
  messages = localStorage.getItem('messages');
  messages = JSON.parse(messages);
  if (messages == undefined) {
    return
  }
  messages.all.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function createMessageBlock (message, save=true) {
    let message_block = document.createElement('div');
    message_block.className = 'message right';
     
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
    const input = event.target.querySelector('.form-input');
    let time = new Date();
    let message = {
      'text': input.value,
      'date': `${time.getHours()}:${time.getMinutes()}`,
      'sender_name': 'Dmitrii Oreshkin' 
    };
    if (input.value) {
      createMessageBlock(message);
      input.value = '';
    }
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}
