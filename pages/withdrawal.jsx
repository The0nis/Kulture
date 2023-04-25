import Link from "next/link";
import Page from "../components/Page";
import WithdrawalAccount from "../components/WithdrawalAccount/Index";
import styles from "../styles/withdrawalaccount.module.scss";

export default function withdrawal() {
  return (
    <div className={styles.withdrawalaccount}>
      <div className={styles.withdrawinner}>
        <h1>Withdrawal</h1>
        <WithdrawalAccount />
        <div className={styles.footer}>
          <Link href="/terms">Terms of policy</Link>
          <Link href="/privacypolicy">Privacy policy</Link>
          <Link href="/contact">Contact</Link>
          <p>copyright@2022</p>
        </div>
      </div>
    </div>
  );
}
