import React from 'react'
import { useState } from 'react'

function MessageForm({sendMessage}) {

    let [value, setValue] = useState('message');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (value == '') {
            return;
        }

        let time = new Date();
        let message = {
            'text': value,
            'date': `${time.getHours()}:${time.getMinutes()}`,
            'sender_name': 'Dmitrii Oreshkin'
        };

        sendMessage(message);
        setValue('');
    }

    return (
        <form className="form" action="/" onSubmit={handleSubmit}>
            <input className="form-input" name="message-text" placeholder="Cообщение" type="textarea" value={value} onChange={handleChange}/>
            <button className="add-document-btn" ><span className="material-icons">attachment</span></button>
        </form>
    )
}

export default MessageForm
