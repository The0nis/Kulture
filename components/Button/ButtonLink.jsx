import Link from "next/link";
import styles from "./ButtonLink.module.css";

const ButtonLink = ({ page, title }) => {
  return (
    <div className={styles.btn}>
      <button type='button'>
        <Link href={`/${page}`}>{title}</Link>
        {/* <Link href='/new-upload'>UPLOAD YOUR BEATS</Link> */}
      </button>
    </div>
  );
};

export default ButtonLink;
