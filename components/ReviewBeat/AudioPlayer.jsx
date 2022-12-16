import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { ImVolumeMedium } from 'react-icons/im';
import styles from './reviewbeat.module.scss';

function AudioPlayer() {
  //Toggle pause/play
  const [play, setPlay] = useState(true);
  const togglePlay = () => {
    setPlay(!play);
  };
  return (
    <div className={styles.audioplayer}>
      <audio
        src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
        preload="metadata"
      >
        <track kind="captions" />
      </audio>
      <div className={styles.controls}>
        {play && (
          <div
            className={styles.controls__play}
            onClick={togglePlay}
            aria-hidden="true"
          >
            <FaPlay size={12} />
          </div>
        )}
        {!play && (
          <div
            className={styles.controls__pause}
            onClick={togglePlay}
            aria-hidden="true"
          >
            <FaPause size={12} />
          </div>
        )}
        <div className={styles.controls__duration}>0:0</div>
        <div className={styles.controls__range}>
          <input type="range" />
        </div>
        <div className={styles.controls__volume}>
          <ImVolumeMedium color="#fff" size={20} />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
