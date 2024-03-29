import React, { useContext, useEffect, useRef, useState } from 'react'
import future from './../../public/future.jpg'
import { Music_Context } from '../context'
import { Tooltip } from 'react-tooltip'



const NavPlayer = () => {

  const {isPlaying,setIsPlaying,sound,setSound,playingSong,
  currentTime,setCurrentTime,duration,setDuration} = useContext(Music_Context);
  const [soundValue,setSoundValue] = useState(50);
  const audioRef = useRef(null);
  

  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
 
  //audio on or mute

  const toggleSound = () =>{

    setSound(prev => !prev);
  
  }
//audio change handle
 
  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    
    if(newVolume == 0){
      setSound(false)
    }
    else setSound(true)
    setSoundValue(newVolume);
    

    
  };

  //play pause 

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(prev => !prev);
  };
  
//audio change
  
  document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.querySelector('#volume-slider');
    console.log(volumeSlider)
  });

  //progress bar 

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
 
  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);
//progress bar
  return (
    <>
   
    <div className="music-player">
     
        <div className='progress-container'>
        <span>{formatTime(currentTime)}</span>
        <input className='progress-bar'
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
  <span>{ formatTime(duration)
  }</span>
  </div>
  <div className="info-control">
    <div className='music-info'>
    <img src={future}/>
    <div >
    <span>Life is good</span>
    <span>Future</span>
    </div>
    </div>
    <div className='controls'>
    <button data-tooltip-id="my-tooltip" data-tooltip-content="Repeat"><i className="fa-solid fa-repeat"></i></button>
    <button data-tooltip-id="my-tooltip" data-tooltip-content="Previous" className="previous-button"><i className="fa-solid fa-angles-left"></i></button>
    <button data-tooltip-id="my-tooltip" data-tooltip-content="Play" onClick={handlePlayPause} className={`${isPlaying?'resume-button':''}`}><i  style={{fontSize:'30px'}} className="fa-solid fa-caret-right"></i></button>
    <button data-tooltip-id="my-tooltip" data-tooltip-content="Pause" onClick={handlePlayPause} className={`${isPlaying?'':'pause-button'}`}><i className="fa-solid fa-pause"></i></button>
     <button data-tooltip-id="my-tooltip" data-tooltip-content="Next" className="next-button"><i className="fa-solid fa-angles-right"></i></button>
     <button data-tooltip-id="my-tooltip" data-tooltip-content="Shuffle"><i className="fa-solid fa-shuffle"></i></button>
    </div>

    <div className='player-volume'>
    <i onClick={toggleSound} className={`fa-solid fa-volume-high ${sound?'':'vol-hide'}`}></i>
    <i onClick={toggleSound} className={`fa-solid fa-volume-xmark ${sound?'vol-hide':''}`}></i>
    <input value={soundValue} onChange={handleVolumeChange} type="range" min="0" max="100"  id="volume-slider"></input>
    <audio controls ref={audioRef} id="audio-player">
    {playingSong.map((sng,index)=>(
      <source key={index} src={sng} type={`audio/${sng.split('.').pop()}`}/>
    )
    )}
    </audio>
    </div>
  </div>
</div>
<Tooltip id="my-tooltip" place="top-end" delayShow={500}  />
</>
  )
}

export default NavPlayer