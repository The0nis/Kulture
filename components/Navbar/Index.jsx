import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.svg";
import { IoHomeOutline, IoCart } from "react-icons/io5";
import { TbFileUpload } from "react-icons/tb";
import sample from "../../assets/miriam.svg";
import {
  MdAccountCircle,
  MdStorefront,
  MdLogout,
  MdFavoriteBorder,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

function Navbar({ type, toggleModal }) {
  // TOGGLE MENU
  const [toggle, setToggle] = useState(false);

  //STATE FOR SCROLL
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  //STATE FOR HAMBURGER EVENTS
  const [hide, setHide] = useState(true);
  const [hidden, setHidden] = useState(true);

  //HMABURGER UPLOAD FUNCTION
  const handleUpload = (e) => {
    setHide(!hide);
  };

  //HMABURGER UPLOAD FUNCTION
  const handleUser = (e) => {
    setHidden(!hidden);
  };

  //   Toggle Function
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // console.log(type);
  return (
    <header className={styles.header_container}>
      <div className={`${styles.header} ${scrollTop ? styles.scrolled : ""}`}>
        <Link
          href='/'
          className={`${
            type === "account" ? styles.header__acc_logo : styles.header__logo
          }`}
        >
          <Image src={logo} alt='logo' />
          <p>Kulture</p>
        </Link>
        {type === "account" ? null : (
          <div className={styles.navbar__hamburger} onClick={toggleMenu}>
            {/* React Icon */}
            <IoMenu size={20} color='fff' />
          </div>
        )}
      </div>
      {type === "account" ? null : (
        <nav
          className={`${styles.navbar} ${styles.navbar_mobile} ${
            toggle ? styles.openmobile : ""
          }`}
        >
          {/* React Icon */}
          <div className={styles.navbar__close}>
            <div onClick={toggleMenu}>
              <CgCloseO size={20} color='fff' />
            </div>
          </div>
          <ul>
            <li>
              <IoHomeOutline />
              <Link href='/'>Home</Link>
            </li>
            <li>
              <IoCart />
              <Link href='/CartReview'>Cart</Link>
            </li>
            <li onClick={handleUpload} className={styles.navbar__upload}>
              <TbFileUpload />
              Upload
              {hide ? (
                <span>
                  <MdKeyboardArrowDown className={styles.arrow} />
                </span>
              ) : (
                <span>
                  <MdKeyboardArrowUp className={styles.arrow} />
                </span>
              )}
              {!hide && (
                <ul className={styles.navbar__submenu}>
                  <li>
                    <Link href='/uploadbeatview'>New Upload</Link>
                  </li>
                  <li>
                    <Link href='/MyUploads'>My Uploads</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* will apply rendering statement here */}
            <li onClick={toggleModal}>
              <Link href='/SignIn'>SignIn</Link>
            </li>
            <li>
              <Link href='/Signup'>Signup</Link>
            </li>

            {/* to show if user is login */}
            <ul className={styles.navbar__signed}>
              <li onClick={handleUser}>
                <Image
                  src={sample}
                  alt='user-profile'
                  className={styles.navbar__profile}
                />{" "}
                Hi User-name{" "}
                {hidden ? (
                  <span>
                    <MdKeyboardArrowDown className={styles.arrow} />
                  </span>
                ) : (
                  <span>
                    <MdKeyboardArrowUp className={styles.arrow} />
                  </span>
                )}
                {!hidden && (
                  <ul className={styles.navbar__signed}>
                    <li>
                      <MdAccountCircle /> My Profile
                    </li>
                    <li>
                      <MdStorefront /> My Orders
                    </li>
                    <li>
                      <MdFavoriteBorder /> Save Orders
                    </li>
                    <li>
                      <MdLogout /> Logout
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
