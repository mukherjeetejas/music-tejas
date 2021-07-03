import React, {useState} from "react"
//adding styles
import "./styles/App.scss"
//adding components
import Song from "./components/Song"
import Player from "./components/Player"
import Library from "./components/Library"
import Nav from "./components/Nav"
//import data
import data from "./data"

function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[5])
  const [isPlaying, setIsPlaying] =useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
  return (
    <div className={`App ${libraryStatus?'library-active':''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song setIsPlaying ={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
      <Player setSongs={setSongs} isPlaying = {isPlaying} setCurrentSong={setCurrentSong} songs={songs} setIsPlaying = {setIsPlaying} currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs}/>
    </div>
  );
}

export default App;
