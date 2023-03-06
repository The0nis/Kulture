/* eslint-disable node/no-missing-import */
import CarouselSlider from "../components/CarouselSlider/Index";
import CartReviewContent from "../components/CartReviewContent/Index";
import Cartsummary from "../components/Cartsummary/Index";
import Page from "../components/Page";
import styles from "../styles/cartreview.module.scss";

function CartReview() {
  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <section className={`${styles.cartreview}`}>
            <h1>Cart Review</h1>
            <CartReviewContent />
          </section>
          <section className={`${styles.cartsummary}`}>
            <Cartsummary />
          </section>
        </div>
        <section className={`${styles.recentlyviewed}`}>
          <h2>Recently viewed</h2>
          <CarouselSlider />
        </section>
      </div>
    </Page>
  );
}

export default CartReview;
