import Link from "next/link";
import style from "./Footer.module.scss";

function Footer({ type }) {
  return (
    <div className={style.wrapper}>
      <div
        className={`${
          type !== "withdrawal" ? style.footer_first : style.footer__mod
        }`}
      >
        <div>
          <p>
            <Link href="#/">Terms of Policy</Link>
          </p>
        </div>
        <div>
          <p>
            <Link href="#/">Contacts</Link>
          </p>
        </div>
      </div>

      <div
        className={`${
          type !== "account" ? style.footer_second : style.footer__mod
        }`}
      >
        <div>
          <p>
            <Link href="#/">Privacy Policy</Link>
          </p>
        </div>
        <div>
          <p>
            <Link href="#/">Copyright@2022</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
