import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';
import { CgCloseO } from 'react-icons/cg';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';

function Navbar() {
  // TOGGLE MENU
  const [toggle, setToggle] = useState(true);

  //   Toggle Function
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  //   Effect to hide scroll when toggle
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const body = document.querySelector('body');
    body.style.overflow = toggle ? 'hidden' : 'auto';
  }, [toggle]);

  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <Image src={logo} alt="logo" />
          <p>Kulture</p>
        </div>
        <div className={styles.navbar__hamburger} onClick={toggleMenu}>
          {/* React Icon */}
          <IoMenu size={20} color="fff" />
        </div>
      </div>
      <nav
        className={`${styles.navbar} ${styles.navbar_mobile} ${
          toggle ? styles.openmobile : ''
        }`}
      >
        {/* React Icon */}
        <div className={styles.navbar__close} onClick={toggleMenu}>
          <CgCloseO size={20} color="fff" />
        </div>
        <ul>
          <li>Home</li>
          <li>Playlist</li>
          <li>Signin</li>
          <li>
            <button type="submit">Signup</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
