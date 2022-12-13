import Image from 'next/image';
import style from './beatcomponent.module.scss';
import cart from '../../assets/cart.svg';
import cartimg from '../../assets/cartimg.svg';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';

function Beatcomponent() {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //   references
  const audioPlayer = useRef(); //reference our audio component
  const progressBar = useRef(); //reference our progress bar
  const animationRef = useRef(); //reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${minutes}` : `${minutes}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div>
      {/* The Cart hearder component conatiner */}
      <div className={style.headerbeatcomponent}>
        <p className={style.carttext}>Cart</p>
        <div>
          <Image src={cart} alt="cart" className={style.cartimage} />
        </div>
      </div>

      {/* The component that display the type of beat and the owner */}
      <div className={style.midcontainer}>
        <div>
          <Image src={cartimg} alt="cart" className={style.cartimage1} />
        </div>

        <div className={style.midcontainertext}>
          <p className={style.Typetext}>Type:</p>
          <p className={style.HipHoptext}>Hip Hop</p>
        </div>

        <div className={style.midcontainertext1}>
          <p className={style.Typetext1}>Wintspread</p>
          <p className={style.Typetext2}>Beat by Winifred</p>
          <p className={style.Typetext3}>@ohuly</p>
          <p className={style.Typetext4}>released on 23rd of November 2022</p>
        </div>
      </div>

      {/* The Media component */}
      <div className={style.audiocontainer}>
        <div className={style.audioPlayer}>
          <audio
            ref={audioPlayer}
            src="https://tooxclusive.com/wp-content/uploads/2014/02/Davido-Aye-_-tooXclusive.com_1.mp3"
            preload="metadata"
          >
            {' '}
          </audio>

          <button onClick={togglePlayPause} className={style.playPause}>
            {isPlaying ? <FaPause /> : <FaPlay className={style.play} />}
          </button>

          {/* current time */}
          <div className={style.currentTime}>{calculateTime(currentTime)}</div>

          {/* progress bar */}
          <div>
            <input
              type="range"
              className={style.progressBar}
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>

          {/* duration  */}
          <div className={style.duration}>
            {duration && !isNaN(duration) && calculateTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beatcomponent;
