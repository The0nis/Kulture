import Link from "next/link";
import styles from "./ButtonOutline.module.css";

const ButtonOutline = ({
  onClick,
  page,
  children,
  customStyles,
  buttonType,
}) => {
  // If page is provided, return a Link component
  if (page) {
    return (
      <div className={styles.btn_container}>
        <Link href={`/${page}`} className={styles.btn} style={{ customStyles }}>
          {children}
        </Link>
      </div>
    );
  }

  // If onClick is provided, return a button element
  if (onClick) {
    return (
      <div className={styles.btn_container}>
        <button
          onClick={onClick}
          className={styles.btn}
          type={buttonType}
          style={{ customStyles }}
        >
          {children}
        </button>
      </div>
    );
  }

  // If neither page nor onClick are provided, return null
  return null;
};

export default ButtonOutline;
