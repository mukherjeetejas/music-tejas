import React from "react"
import LibrarySong from "./LibrarySong"

const Library = ({setCurrentSong, songs, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus?'active-library':""}`}>
            <h2>Library</h2>
            <div>
                {songs.map(song=><LibrarySong 
                setCurrentSong={setCurrentSong}
                song={song} 
                songs={songs}
                setSongs={setSongs}
                key={song.id}/>)}
            </div>
        </div>
    )
}

export default Library