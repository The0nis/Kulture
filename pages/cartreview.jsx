/* eslint-disable node/no-missing-import */
import CarouselSlider from '../components/CarouselSlider/Index';
import CartReview from '../components/CartReview/Index';
import Cartsummary from '../components/Cartsummary/Index';
import Page from '../components/Page';
import styles from '../styles/cartreview.module.scss';

function Cartreview() {
  return (
    <Page>
      <div className="container">
        <section className={`${styles.cartreview}`}>
          <h1>Cart Review</h1>
          <CartReview />
        </section>
        <section className={`${styles.cartsummary}`}>
          <Cartsummary />
        </section>
        <section className={`${styles.recentlyviewed}`}>
          <h2>Recently viewed</h2>
          <CarouselSlider />
        </section>
      </div>
    </Page>
  );
}

export default Cartreview;
