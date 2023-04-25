import Image from "next/image";
import { OrdersData } from "./OrdersData";
import styles from "./ordersdata.module.scss";
import ordersImage from "../../assets/ordersimage.svg";
import { style } from "motion";

function MyOrders() {
  return OrdersData.map((option) => (
    <div className={styles.myorders}>
      <div className={styles.myorders__image}>
        <Image src={ordersImage} alt={option.Name} />
      </div>
      <div className={styles.myorders__details}>
        <div>
          <h2>{option.name}</h2>
          <div className={styles.or}>
            <p>or:{option.or}</p>
          </div>
          <p>
            by {option.username}{" "}
            <span className={styles.pspan}> {option.moniker}</span>
          </p>
          <p>{option.license}</p>
          <h4>{option.date}</h4>
        </div>
        <div className={styles.myorders__prices}>
          <h3> NGN {option.price}</h3>
          <button type="button">Download File</button>
        </div>
      </div>
    </div>
  ));
}

export default MyOrders;
