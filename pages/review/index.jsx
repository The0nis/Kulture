import ReviewBeat from '../../components/ReviewBeat/Index';
import Page from '../../components/Page';
import styles from './review.module.scss';

function Review() {
  return (
    <Page>
      <div className={styles.review}>
        <section className={styles.review__beat}>
          <h1>Review</h1>
          <ReviewBeat />
        </section>
      </div>
    </Page>
  );
}

export default Review;
