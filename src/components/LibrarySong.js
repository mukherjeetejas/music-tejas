import React from "react"

const LibrarySong = ({setCurrentSong, song, songs, setSongs}) => {
    const songSelectHandler = () => {
        setCurrentSong(song)
        setSongs(
            songs.map((targetSong) => {
                return {
                  ...targetSong,
                  active: targetSong.id === song.id
                }
              }
            )
          )
    }
    return (
        <div onClick = {songSelectHandler} className={`library-song ${song.active?'selected':""}`}>
            <img src={song.cover} alt = "album-cover"></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong