import React, { useState ,useRef, useEffect } from "react";
import Logoimg from "../../public/Logoimg.png";

import Music_1 from '../../public/music/music_1(1).mp3'
import Music_2 from '../../public/music/music_1(2).mp3'
import Music_3 from '../../public/music/music_1(3).mp3'
import Music_4 from '../../public/music/music_1(4).mp3'
import Music_5 from '../../public/music/music_1(5).mp3'
import Music_6 from '../../public/music/music_1(6).mp3'
import Music_7 from '../../public/music/music_1(7).mp3'
import Music_8 from '../../public/music/music_1(8).mp3'
import Music_9 from '../../public/music/music_1(9).mp3'
import Music_10 from '../../public/music/music_1(10).mp3'
import Music_11 from '../../public/music/music_1(11).mp3'
import Music_12 from '../../public/music/music_1(12).mp3'
import Music_13 from '../../public/music/music_1(13).mp3'
import Music_14 from '../../public/music/music_1(14).mp3'
import Music_15 from '../../public/music/music_1(15).mp3'
import Music_16 from '../../public/music/music_1(16).mp3'


 const MusicList = [
    Music_1 ,
    Music_2 ,
    Music_3 ,
    Music_4 ,
    Music_5 ,
    Music_6 ,
    Music_7 ,
    Music_8 ,
    Music_9 ,
    Music_10 ,
    Music_11 ,
    Music_12 ,
    Music_13 ,
    Music_14 ,
    Music_15 ,
    Music_16 
]


function MusicSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [list, setList] = useState(0)
    const [loop, setloop] = useState(false)
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      };

      const next = ()=>{
        console.log(audioRef.current.currentTime)
          audioRef.current.play();
          setIsPlaying(true);
          setList(list + 1)
          if (list >= MusicList.length -1) {
            setList(0)
        }
    }
  

  const [dashoff, setDashoff] = useState("96");

  let circle = {
    strokeDasharray: "472"
  };


  const prev = ()=>{
    audioRef.current.play();
    setIsPlaying(true);
      setList(list - 1)
      if (list <= 0) {
        setList(MusicList.length - 1)
    }
}

  const loops = ()=>{
    setloop(!loop)
  }

  const random = ()=>{
    audioRef.current.play();
    setIsPlaying(true);
    const ransdom = Math.floor(Math.random()*17)
      setList(ransdom)
    
}

  return (
    <>
     <div>
      <audio ref={audioRef} src={MusicList[list]} autoPlay='true' />
    </div>
      <div className="wrapper w-[20rem] h-[30rem] rounded-3xl bg-white flex justify-center items-center ">
        <div className="innerWrapper flex flex-col justify-between w-[19rem] h-[29rem] rounded-2xl text-center bg-[#6c3cac] p-2 py-6 ">
          <div className="fstside flex justify-between items-center px-2 text-[0.8rem] ">
            <i className="fa-solid fa-chevron-down"></i>
            <p>My favorite list</p>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div className="sndside">
            <h2 className="font-bold text-sm ">ALWAYS MITRAZ {list+1} </h2>
            <p className="text-[0.675rem]">Ahyan 2023</p>
          </div>
          <div className="thrdside flex justify-center">
            <div
              id="musicbar"
              className="musicbar rounded-full flex relative justify-center items-center "
            >
              <img draggable="false" src={Logoimg} alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="w-[9.8rem] rounded-full z-0 absolute h-[9.8rem] "
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="cyan" />
                    <stop offset="60%" stopColor="blue" />
                    <stop offset="100%" stopColor="orange" />
                  </linearGradient>
                </defs>
                <circle
                  style={circle}
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                />
              </svg>
              <i onClick={togglePlay} className={`fa-solid  absolute z-10 bg-[#1fd1d1] bottom-[-1rem] p-2 flex justify-center items-center text-[1.5rem] rounded-full  text-white left-[3.5rem] ${isPlaying ? 'fa-circle-pause' : 'fa-shield-heart'} `}></i>
            </div>
          </div>
          <div className="frthside flex w-full px-[3rem] justify-between font-bold ">
            <i onClick={random} className="fa-solid fa-shuffle"></i>
            <i onClick={prev} className="fa-solid fa-backward-step"></i>
            <i onClick={togglePlay} className= {` play_pause fa-solid relative ${isPlaying ? 'fa-circle-pause' : 'fa-shield-heart'}`} ></i>
            <i onClick={next} className="fa-solid fa-forward-step"></i>
            <i onClick={loops} className="fa-solid fa-repeat"></i>
          </div>
          <div className="ffth flex justify-between mx-3 px-[2rem] text-[0.7rem] bg-[#93c5db] py-3 rounded-full ">
            <p>up-next</p> |<p>lyrics</p> |<p>related</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicSection;
