function checkLocalStorageAvailable() {
    try {
        localStorage.setItem('test', 'text');
        localStorage.getItem('test');
    } catch (err) {
        return false;
    }
    return true;
}

function getMesagesFromLocalStorage() {
    if (!checkLocalStorageAvailable) {
        return false
    }
    let messages = localStorage.getItem('messages');
    if (!messages) {
        return false
    }
    messages = JSON.parse(messages);
    return messages.all;
}

function saveMessageToLocalStorage(message) {
    if (!checkLocalStorageAvailable) {
        return
    }
    let messages = localStorage.getItem('messages');
    if (messages === '' || messages == null) {
        localStorage.setItem('messages', JSON.stringify({ 'all': [] }));
    }
    messages = localStorage.getItem('messages');
    messages = JSON.parse(messages);
    if (messages === undefined) {
        return
    }
    messages.all.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

export { getMesagesFromLocalStorage, saveMessageToLocalStorage };