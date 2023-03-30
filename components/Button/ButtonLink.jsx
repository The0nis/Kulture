import Link from "next/link";
import styles from "./ButtonLink.module.css";

const ButtonLink = ({ page, title }) => {
  return (
    <div className={styles.btn_container}>
      <button type='button' className={styles.btn}>
        <Link href={`/${page}`}>{title}</Link>
      </button>
    </div>
  );
};

export default ButtonLink;
