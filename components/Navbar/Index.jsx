import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.svg";
import { IoHomeOutline, IoCart } from "react-icons/io5";
import { TbFileUpload } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
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
      <div
        className={`${styles.headerWrapper} ${styles.header} ${
          scrollTop ? styles.scrolled : ""
        }`}
      >
        <div className={`${styles.headerBackground}`}></div>
        <div className={`${styles.logo} `}>
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

        {/* Navigation for Mobile Screens */}
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
            <ul className={styles.linkWrapperMobile}>
              <li className={styles.listItemMobile}>
                <IoHomeOutline />
                <Link href='/'>Home</Link>
              </li>
              <li className={styles.listItemMobile}>
                <IoCart />
                <Link href='/CartReview'>Cart</Link>
              </li>
              <li onClick={handleUpload} className={styles.navbar__upload}>
                <span className={styles.uploadLinkWrapper}>
                  <TbFileUpload />
                  Upload
                </span>
                {hide ? (
                  <span className={styles.arrow}>
                    <MdKeyboardArrowDown />
                  </span>
                ) : (
                  <span className={styles.arrow}>
                    <MdKeyboardArrowUp />
                  </span>
                )}
                {!hide && (
                  <ul className={styles.navbar__submenu}>
                    <li>
                      <Link href='/new-upload'>New Upload</Link>
                    </li>
                    <li>
                      <Link href='/myuploads'>My Uploads</Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* will apply rendering statement here */}
              <li onClick={toggleModal} className={styles.signinListItemMobile}>
                <Link href='/SignIn'>SignIn</Link>
              </li>
              <li className={styles.signupListItemMobile}>
                <Link href='/Signup'>Signup</Link>
              </li>

              {/* to show if user is login */}
              <ul className={styles.navbar__signed}>
                <li onClick={handleUser}>
                  <Image
                    src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80'
                    alt='user-profile'
                    className={styles.navbar__profile}
                    width={40}
                    height={40}
                  />
                  Hi, Muyiwa
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
                        <MdAccountCircle />
                        <Link href='/profile'>My Profile</Link>
                      </li>
                      <li>
                        <MdStorefront /> <Link href='/MyOrders'>My Orders</Link>
                      </li>
                      <li>
                        <MdFavoriteBorder />
                        <Link href='/SavedItem'>Saved Items</Link>
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

        {/* Large Screens Navigation */}
        <div className={styles.navDesktopWrapper}>
          <div className={styles.searchContainer}>
            <label htmlFor='search'>
              <div className={styles.inputWrapper}>
                <input
                  id='search'
                  placeholder='Search'
                  className={styles.input}
                />{" "}
                <FiSearch />
              </div>
            </label>
          </div>
          <nav className={styles.navbar_desktop}>
            <ul className={styles.linkWrapper_desktop}>
              <li className={styles.listItem}>
                <IoHomeOutline size={24} />
                <Link href='/'>Home</Link>
              </li>
              <li className={styles.listItem}>
                <IoCart size={24} />
                <Link href='/CartReview'>Cart</Link>
              </li>
              <li onClick={handleUpload} className={`${styles.listItem} `}>
                <button className={styles.uploadListItem}>
                  <TbFileUpload size={24} color='white' />
                  Upload
                </button>
                {!hide && (
                  <ul className={styles.uploadOptionsDesktop}>
                    <li className={styles.listItem}>
                      <Link href='/new-upload'>New Upload</Link>
                    </li>
                    <li className={styles.listItem}>
                      <Link href='/myuploads'>My Uploads</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* <li onClick={toggleModal}>
                <Link href='/SignIn'>SignIn</Link>
              </li>
              <li className={styles.signupListItemDesktop}>
                <Link href='/Signup'>Signup</Link>
              </li> */}

              {/* to show if user is login */}
              <li onClick={handleUser} className={styles.userListItem}>
                <div className={styles.userImgWrapper}>
                  <Image
                    src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80'
                    alt='user-profile'
                    width={40}
                    height={40}
                  />
                </div>
                Hi, Adekunle
                {hidden ? (
                  <span className={styles.arrow}>
                    <MdKeyboardArrowDown />
                  </span>
                ) : (
                  <span className={styles.arrow}>
                    <MdKeyboardArrowUp />
                  </span>
                )}
                {!hidden && (
                  <ul className={styles.navbar_desktop__signedIn}>
                    <li>
                      <MdAccountCircle />
                      <Link href='/profile'>My Profile</Link>
                    </li>
                    <li>
                      <MdStorefront /> <Link href='/MyOrders'>My Orders</Link>
                    </li>
                    <li>
                      <MdFavoriteBorder />
                      <Link href='/SavedItem'>Saved Items</Link>
                    </li>
                    <li>
                      <MdLogout /> Logout
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
