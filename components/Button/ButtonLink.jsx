import Link from "next/link";
import styles from "./ButtonLink.module.css";

const ButtonLink = ({ page, title, customStyle }) => {
  console.log(customStyle);
  return (
    <div className={styles.btn_container}>
      <button type='button' className={styles.btn} style={{ customStyle }}>
        <Link href={`/${page}`}>{title}</Link>
      </button>
    </div>
  );
};

export default ButtonLink;
