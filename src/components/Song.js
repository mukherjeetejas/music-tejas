import React from "react"

const Song = ({currentSong, isPlaying, setIsPlaying}) => {
    const imgClickHandler = () => {
        setIsPlaying(!isPlaying)
    }
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt = "album-cover" onClick={imgClickHandler} className={`${isPlaying?'active-image':""}`}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song