import Link from 'next/link';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.footer_first}>
        <div>
          <p>
            <Link href="#">Terms of Policy</Link>
          </p>
        </div>
        <div>
          <p>
            <Link href="#">Contacts</Link>
          </p>
        </div>
      </div>

      <div className={style.footer_second}>
        <div>
          <p>
            <Link href="#">Privacy Policy</Link>
          </p>
        </div>
        <div>
          <p>
            <Link href="#">Copyright@2022</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
