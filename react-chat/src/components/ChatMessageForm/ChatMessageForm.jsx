import React from "react";
import { useState } from "react";
import { connect, useSelector } from "react-redux";
import styles from "./ChatMessageForm.module.scss";
import useRecorder from "./Recorder";
import { newMessageAction } from "../../actions/messageAction";

function ChatMessageForm(props) {
  const chat = useSelector((state) => state.activeChatreducer);

  const [value, setValue] = useState("");
  const [file, setFile] = useState([]);
  let [audio, setAudio, isRecording, startRecording, stopRecording] =
    useRecorder();

  const [location, setLocation] = useState("");

  function getLocation(event) {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setLocation(
      `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`
    );
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function onFile(event) {
    const f = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFile([reader.result, URL.createObjectURL(event.target.files[0])]);
    };

    if (f) {
      reader.readAsDataURL(f);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (value === "" && file.length === 0 && audio.length === 0) {
      return;
    }

    let message = {
      text: value,
      chat_id: chat.id,
      author_id: 2, // когда сделаю авторизацию, это поле можно будет убрать
      author: "Dmitrii Oreshkin",
      file: file[0],
      audio: audio[0],
      location: location,
    };

    props.newMessageAction(message);
    setValue("");
    setFile([]);
    setLocation("");
    setAudio([]);

    message.location = "";
    message.audio = [];
  }

  return (
    <div className={styles.container}>
      {file.length !== 0 && (
        <>
          <img
            className={styles.imagePreview}
            src={file[1]}
            alt="image_preview"
            onClick={() => setFile([])}
          />
        </>
      )}

      <form className={styles.form} action="/" onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          name="message-text"
          placeholder="Cообщение"
          type="textarea"
          value={value}
          onChange={handleChange}
        />

        <input type="file" id="file" onChange={onFile} accept="image/*" />
        <div className={styles.addDocumentBtn}>
          <label className={styles.button} htmlFor="file">
            <span className="material-icons">attachment</span>
          </label>
        </div>
        <div className={styles.addDocumentBtn} onClick={getLocation}>
          <span className="material-icons">location_on</span>
        </div>
        <button
          className={styles.addAudioBtn}
          onMouseDown={startRecording}
          onMouseUp={(e) => {
            stopRecording();
            handleSubmit(e);
          }}
        >
          {!isRecording && <span className="material-icons">mic</span>}
          {isRecording && (
            <span className="material-icons">record_voice_over</span>
          )}
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messagereducer.messages,
});

export default connect(mapStateToProps, { newMessageAction })(ChatMessageForm);

// export { ChatMessageForm };
