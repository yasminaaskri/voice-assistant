import "./App.css";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => {
        console.log("Reset command triggered");
        resetTranscript();
      },
    },

    {
      command: "increase font size",
      callback: () => {
        document.getElementById("content").style.fontSize = "22px";
        console.log("Font size increased to 22px");
      },
    },
    {
      command: "decrease font size",
      callback: () => {
        document.getElementById("content").style.fontSize = "16px";
        console.log("Font size decreased to 16px");
      },
    },
    {
      command: "change text color to *",
      callback: (color) => {
        console.log("Changing text color to:", color);
        document.getElementById("content").style.color = color;
      },
    },
    {
      command: "open *",
      callback: (site) => {
        console.log("Opening website:", site);
        window.open("http://" + site);
      },
    },
  ];

  SpeechRecognition.startListening({ continuous: true, language: "en-EN" });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    { commands }
  );
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <div className="nav">
        <h2>please speak something to write</h2>
      </div>
      <div id="content">{transcript}</div>
    </div>
  );
};

export default App;
