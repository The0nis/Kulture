/* eslint-disable node/no-missing-import */
import MyOrders from '../components/MyOrders/Index';
import Page from '../components/Page';
import styles from '../styles/myorders.module.scss';

function myorders() {
  return (
    <Page>
      <div className={styles.myorders}>
        <MyOrders />
      </div>
    </Page>
  );
}

export default myorders;
