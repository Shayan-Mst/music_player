import { createContext } from "react";

export const Music_Context = createContext({

    sideBar:false,
    setSideBar:() => {},
    isPlaying: false,
    setIsPlaying:() => {},
    sound:true,
    setSound:() => {},
    playingSong: null,
    setPlayingSong:() => {},
    duration : null,
    setDuration : () => {},
    currentTime:null,
    setCurrentTime : () => {}



})