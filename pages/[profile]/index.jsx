/* eslint-disable node/no-missing-import */
import Image from 'next/image';
import location from '../../assets/location.svg';
import dribble from '../../assets/dribbble.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import Sales from '../../components/Sales/Index';
import Page from '../../components/Page';
import styles from './profile.module.scss';
import avatarProfile from '../../assets/Avatar_profile.svg';
import camera from '../../assets/camera.svg';
import SaleChart from '../../components/SalesChart/Index';

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
            </div>
          </div>
          <button type="button" className={styles.hero_btn}>
            UPLOAD BEATS
          </button>
        </div>
        {/* Intro */}
        <div className={styles.intro}>
          <h2>Intro</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni .
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
        <div className={styles.sales}>
          <div>
            <Sales />
          </div>
          <div>
            <SaleChart />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Profile;
