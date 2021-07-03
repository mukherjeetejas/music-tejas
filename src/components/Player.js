import React, {useRef, useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong, isPlaying, setIsPlaying, songs, setCurrentSong, setSongs}) => {
    const audioRef = useRef(null);
    useEffect(()=>{
        setSongs(
            songs.map((targetSong) => {
                return {
                  ...targetSong,
                  active: targetSong.id === currentSong.id
                }
              }
            )
          )
    }, [currentSong])
    useEffect(()=>{
        if (isPlaying) 
        audioRef.current.play()
        else 
        audioRef.current.pause()

    },[isPlaying])
    //Event Handlers
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        }
        else {
            audioRef.current.play()
            setIsPlaying(true)
        }
    };
    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration || 0;
        setCurrentTime(currentTime)
        setDuration(duration)

    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setCurrentTime(e.target.value)
    }
    const autoPlayHandler = () => {
        if (isPlaying) {
          audioRef.current.play();
        }
      }
      const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        } else if (direction === 'skip-back') {
            if (currentIndex > 0) {
                setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            } else {
                setCurrentSong(songs[songs.length - 1]);
            }
        }
    };
    const songEndHandler = () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    const getTime = time => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        const secondsWithZero = String(seconds).padStart(2, "0")
        return `${minutes}:${secondsWithZero}`
    }
    //States    
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    return (
        <div className="player">
            <div className="time-controller">
                <p>{getTime(currentTime)}</p>
                <input min = {0} max = {duration} type="range" value = {currentTime} onChange={dragHandler}/>
                <p>{getTime(duration)}</p>
            </div>
            <div className="play-controller">
            <FontAwesomeIcon onClick = {()=>skipTrackHandler("skip-back")} className="skip-back" icon={faAngleLeft} size="2x"/>
            <FontAwesomeIcon onClick = {playSongHandler} className="play" icon={isPlaying?faPause:faPlay} size="2x"/>
            <FontAwesomeIcon onClick = {()=>skipTrackHandler("skip-forward")} className="skip-forward" icon={faAngleRight} size="2x"/>
            </div>
            <audio onLoadedData={autoPlayHandler} onTimeUpdate = {timeUpdateHandler} onLoadedMetadata = {timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
        </div>
    )
}

export default Player