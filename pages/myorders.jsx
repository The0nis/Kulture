/* eslint-disable node/no-missing-import */
import MyOrders from '../components/MyOrders/Index';
import Page from '../components/Page';

function myorders() {
  return (
    <Page>
      <div>
        <MyOrders />
      </div>
    </Page>
  );
}

export default myorders;
