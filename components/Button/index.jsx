import Link from "next/link";
import styles from "./Button.module.css";

// const ButtonLink = ({ page, title, customStyle }) => {
//   console.log(customStyle);
//   return (
//     <div className={styles.btn_container}>
//       <button type='button' className={styles.btn} style={{ customStyle }}>
//         <Link href={`/${page}`}>{title}</Link>
//       </button>
//     </div>
//   );
// };

// export default ButtonLink;

const Button = ({ onClick, page, children, customStyles, buttonType }) => {
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

export default Button;
