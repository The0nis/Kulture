/* eslint-disable node/no-missing-import */
import { FiSearch } from 'react-icons/fi';
import Page from '../components/Page';
import styles from '../styles/Home.module.scss';
import CarouselSlider from '../components/CarouselSlider/Index';
import BeatCard from '../components/BeatCard/BeatCard';
import TrendingSearch from '../components/Trendingsearch/Index';
import PopularProducers from '../components/PopularProducer/Index';

export default function Home() {
  return (
    <div className={styles.container}>
      <Page>
        <div className={styles.home}>
          {/* Hero */}
          <div className={styles.hero}>
            <h1>Find and upload trending beat for music production</h1>
            <p>Preview, upload, buy beats and vocals for you projects</p>
            <div className={styles.hero__search}>
              <input type="text" placeholder="Search" />
              <div className={styles.icon}>
                <FiSearch size={20} color="#fff" />
              </div>
            </div>
            <button type="button">UPLOAD YOUR BEATS</button>
          </div>

          <div className={styles.home__bodywrap}>
            {/* Popular Uploads Slider */}
            <div className={styles.home__popularuploads}>
              <h2>Popular Uploads</h2>
              <CarouselSlider />
            </div>
            <div className={styles.home__feedtext}>
              <h2>Feed</h2>
            </div>
            <div className={styles.home__wrapper}>
              <div className={styles.home__wrapperone}>
                {/* Feed */}
                <div className={styles.home__feed}>
                  <TrendingSearch />
                </div>
                {/* Popular Producers */}
                <div className={styles.home__popularproducers}>
                  <PopularProducers />
                </div>
              </div>

              <div className={styles.home__wrappertwo}>
                {/* Beat Card */}
                <div className={styles.home__beatcard}>
                  <BeatCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
