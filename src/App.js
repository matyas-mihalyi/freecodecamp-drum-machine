import './App.css';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState(''); 

  const sounds = [
    {
      key: 'Q',
      audio: './sounds/drum1.mp3',
      desc:'Bass Drum',
    },
    {
      key: 'W',
      audio: './sounds/drum2.mp3',
      desc:'Hi Hat Drum',
    },
    {
      key: 'E',
      audio: './sounds/drum3.mp3',
      desc:'Snare Drum',
    },
    {
      key: 'A',
      audio: './sounds/piano1.mp3',
      desc:'Piano Chord 1',
    },
    {
      key: 'S',
      audio: './sounds/piano2.mp3',
      desc:'Piano Chord 2',
    },
    {
      key: 'D',
      audio: './sounds/piano3.mp3',
      desc:'Piano Chord 3',
    },
    {
      key: 'Z',
      audio: './sounds/trumpet1.mp3',
      desc:'Trumpet 1',
    },
    {
      key: 'X',
      audio: './sounds/trumpet2.mp3',
      desc:'Trumpet 2',
    },
    {
      key: 'C',
      audio: './sounds/trumpet3.mp3',
      desc:'Trumpet 3',
    },
  ];

  document.addEventListener("keydown", (e) => handleKeyDown(e));
  
  function handleKeyDown (e) {
    if (sounds.some(sound => sound.key === e.key.toUpperCase())) {
      playAudio(e.key.toUpperCase())
    } else {
      return
    }
  };
  
  function handleClick (e) {
    playAudio(e.target.innerText)
  };

  function playAudio (key) {
    document.querySelector(`audio#${key}`).currentTime = 0;
    document.querySelector(`audio#${key}`).play();
    setDisplay(sounds.find(sound => sound.key === key).desc)
  };
  
  function removeDisplay () {
    setDisplay('');
  };


  return (
    <div id="drum-machine" onKeyDown={handleKeyDown} className="container-fluid d-flex flex-column">
      <div className="row min-vh-10">
        <div id="display" className="col">{display}</div>
      </div>
      <div className="row">
        <div id="keyboard" className="col container-f">
          <div className="row">
          {sounds.map((sound,i) =>
            <div className="drum-pad btn" id={sound.desc} title={sound.desc} onClick={handleClick} key={sound.desc}>
              {sound.key}
              <audio src={sound.audio} className="clip" id={sound.key} onEnded={removeDisplay} preload="auto"></audio>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
