import voice from './assets/voice.mp3';
import './App.css'

function App() {

  return (
    <div className="wrapper">
      <div className="content">
        <div className="image_wrapper">
        </div>
        <div className="audio">
        <audio controls>
      <source src={voice} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    </div>
      </div>
    </div>
  )
}

export default App
