import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audio, setAudio] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  async function requestRecorder() {
    // alert("request recorder");

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
  }

  function onAudio(data) {
    const f = data;
    const reader = new FileReader();
    reader.onload = () => {
      setAudio([reader.result, URL.createObjectURL(f)]);
    };

    if (f) {
      reader.readAsDataURL(f);
    }
  }

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then((r) => {
          setRecorder(r);
        });
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
      console.log(recorder);
    } else {
      //   console.log(recorder);
      recorder.stop();
      console.log(recorder);
    }

    // Obtain the audio when ready.

    recorder.ondataavailable = (e) => {
      //   setAudio([URL.createObjectURL(e.data)]);
      onAudio(e.data);
      console.log(audio);
    };

    recorder.onstop = (e) => {
      //   setAudioURL(URL.createObjectURL(e.data));
      // console.log(audioURL);
      //   const blob = new Blob(e.data, { type: "audio/ogg; codecs=opus" });
      //   const audioURL1 = window.URL.createObjectURL(blob);
      //   setAudioURL(audioURL1);
    };
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    console.log("start recording");
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log("stop recording");
  };

  return [audio, setAudio, isRecording, startRecording, stopRecording];
};

export default useRecorder;
