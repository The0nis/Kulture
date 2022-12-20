import styles from './buyingoption.module.scss';

function BuyOptionBox() {
  return (
    <div className={styles.radiobox}>
      <label>
        <input type="radio" name="radio" checked />
        <div className={`${styles.radiobox__item} ${styles.box}`}>
          <h2>Basic WAV LEASE</h2>
          <h3>NGN 15,000</h3>
          <p>MP3 AND WAV</p>
        </div>
      </label>
    </div>
  );
}

export default BuyOptionBox;
