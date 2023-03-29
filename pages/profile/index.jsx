/* eslint-disable node/no-missing-import */
import Image from "next/image";
import location from "../../assets/location.svg";
import dribble from "../../assets/dribbble.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import Sales from "../../components/Sales/Index";
import Page from "../../components/Page";
import styles from "./profile.module.scss";
import avatarProfile from "../../assets/Avatar_profile.svg";
import camera from "../../assets/camera.svg";
import SaleChart from "../../components/SalesChart/Index";
import BeatCard from "../../components/BeatCard";
import Trendingsearch from "../../components/Trendingsearch/Index";

function Profile() {
  return (
    <Page>
      <div className={styles.profile}>
        <h1>Profile</h1>
        <div className={styles.profile__hero}>
          <div className={styles.hero_top}>
            <div className={styles.image}>
              <Image src={avatarProfile} alt="profile avatar" />
              <button type="submit">
                <Image src={camera} alt={camera} /> Upload image
              </button>
            </div>
            <div className={styles.profile__username}>
              <h2>Banny Anderson</h2>
              <h3>@andybanny</h3>
              <button type="button" className={styles.hero_btn_1}>
                UPLOAD BEATS
              </button>
            </div>
          </div>
          <button type="button" className={styles.hero_btn_2}>
            UPLOAD BEATS
          </button>
        </div>
        {/* Intro */}
        <div className={styles.intro}>
          <h2>Intro</h2>
          <p>
            Ahmed is a 30 years old music Artist who is based in Lagos, Nigeria.
            He wants checkout vocal samples and beats of producers for his music
            and purchase them with ease. I would love to have a platform where i
            can check sample of beats and vocals, purchase them with ease and
            get .
          </p>
          <div className={styles.intro__bottom}>
            <div className={styles.intro__location}>
              <Image src={location} alt="location" />
              <p>Lagos, Nigeria</p>
            </div>
            <div className={styles.intro__icons}>
              <Image src={dribble} alt="dribble" />
              <Image src={facebook} alt="facebook" />
              <Image src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <h2>Stats</h2>
          <div className={styles.stats}>
            <Sales />
            <SaleChart />
          </div>
        </div>
        <div className={styles.feeds}>
          <h2>Feed</h2>
          <div className={styles.feeds__card}>
            <div className={styles.trends}>
              <Trendingsearch />
            </div>
            <BeatCard />
          </div>
          <button type="button" className={styles.btn}>
            ...Load more
          </button>
        </div>
      </div>
    </Page>
  );
}

export default Profile;
