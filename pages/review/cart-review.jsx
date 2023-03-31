import CarouselSlider from "../../components/CarouselSlider/Index";
import CartReviewContent from "../../components/Cart/CartReviewContent";
import CartSummary from "../../components/Cart/CartSummary";
import Page from "../../components/Page";
import styles from "./cartreview.module.scss";

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
            <CartSummary />
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
