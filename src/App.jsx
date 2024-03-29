
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { useState } from 'react'
import { Music_Context } from './context'
import LIG from './assets/life_is_good.mp3'
import avatar from './assets/avatar.mp3'
import fukumean from './assets/fukumean.mp3'


function App() {
  
  const [sideBar,setSideBar] = useState(false);
  const [isPlaying,setIsPlaying] = useState(false);
  const [sound,setSound] = useState(true);
  const [playingSong,setPlayingSong] = useState([
    
    avatar ,
     LIG ,
     
     fukumean])
  
     const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  return (
    <>
    <Music_Context.Provider value={{
      sideBar,
      setSideBar,
      isPlaying,
      setIsPlaying,
      sound,
      setSound,
      playingSong,
      setPlayingSong,
      duration,
      setDuration,
      currentTime,
      setCurrentTime
    }}>
    
  
  <Routes>
    <Route path='/' element={<Home/>}>

    </Route>
  </Routes>
  </Music_Context.Provider>
    </>
  )
}

export default App
