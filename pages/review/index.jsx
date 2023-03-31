import ReviewBeat from "../../components/ReviewBeat/Index";
import Link from "next/link";

import Page from "../../components/Page";
import styles from "./review.module.scss";
import BuyOptionBox from "../../components/Buyingoption/BuyOptionBox";
import ButtonLink from "../../components/Button/ButtonLink";

function Review() {
  return (
    <Page>
      <div className={styles.review}>
        <section className={styles.review__beat}>
          <h1>Review</h1>
          <ReviewBeat />
        </section>
        <section className={styles.review__buyoptions}>
          <h4>Buying Options</h4>
          <div className={styles.review__boxes}>
            <BuyOptionBox />
          </div>
          <p className={styles.terms}>Terms of Usage</p>
        </section>
        <section className={styles.review__cost}>
          <h2>Total:</h2>
          <p>NGN 1,000,000</p>
          <div className={styles.review__btnwrap}>
            {/* <button type='submit' className={styles.add_btn}>
              <Link href='/cartreview'>Add to cart</Link>
            </button> */}
            <ButtonLink
              page='cartreview'
              title='Add to cart'
              customStyle='padding: 15px 24px'
            />
            <button type='submit' className={styles.continue_btn}>
              <Link href='/'>Continue Shopping</Link>
            </button>
          </div>
        </section>
      </div>
    </Page>
  );
}

export default Review;
