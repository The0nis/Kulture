import Image from 'next/image';
import styles from './cartreview.module.scss';
import cartreviewCover from '../../assets/cartreview_cover.svg';

function CartReview() {
  return (
    <div className={styles.reviews}>
      <div className={styles.review}>
        <div className={styles.review__img}>
          <Image src={cartreviewCover} alt="cover" />
        </div>
        <div className={styles.review__details}>
          <h2>Kindergaten drive</h2>
          <div className={styles.review__price_btn}>
            <h3>NGN 200,000</h3>
            <button type="submit">Review license</button>
          </div>
          <div className={styles.review__audio}>
            <p>Vocals</p>
            <p className={styles.mid_dot}>&#183;</p>
            <p>Premium License (mp3 and WAV)</p>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.review__img}>
          <Image src={cartreviewCover} alt="cover" />
        </div>
        <div className={styles.review__details}>
          <h2>Kindergaten drive</h2>
          <div className={styles.review__price_btn}>
            <h3>NGN 200,000</h3>
            <button type="submit">Review license</button>
          </div>
          <div className={styles.review__audio}>
            <p>Vocals</p>
            <p className={styles.mid_dot}>&#183;</p>
            <p>Premium License (mp3 and WAV)</p>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.review__img}>
          <Image src={cartreviewCover} alt="cover" />
        </div>
        <div className={styles.review__details}>
          <h2>Kindergaten drive</h2>
          <div className={styles.review__price_btn}>
            <h3>NGN 200,000</h3>
            <button type="submit">Review license</button>
          </div>
          <div className={styles.review__audio}>
            <p>Vocals</p>
            <p className={styles.mid_dot}>&#183;</p>
            <p>Premium License (mp3 and WAV)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartReview;
