import Image from 'next/image';
import styles from './reviewbeat.module.scss';
import beatreview from '../../assets/beatreview.svg';
import AudioPlayer from './AudioPlayer';

function ReviewBeat() {
  return (
    <div className={styles.reviewbeat}>
      <div className={styles.reviewbeat__top}>
        <div className={styles.image}>
          <Image src={beatreview} alt="beat image" />
        </div>
        <div className={styles.reviewbeat__topleft}>
          <h2>Type: Hip Hop</h2>
          <h3>Wintspread</h3>
          <p>Beat by Winifred @ohuly released on 23 November 2022</p>
        </div>
      </div>
      <div className={styles.reviewbeat__bottom}>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default ReviewBeat;
