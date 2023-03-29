/* eslint-disable node/no-missing-import */
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Page from "../components/Page";
import styles from "../styles/Home.module.scss";
import CarouselSlider from "../components/CarouselSlider/Index";
import BeatCard from "../components/HomeBeatCard";
import TrendingSearch from "../components/Trendingsearch/Index";
import PopularProducers from "../components/PopularProducer/Index";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // execute your search function with the searchTerm
      console.log("search for:", searchInput);
      router.push("/search");
    }
  };

  return (
    <div className={styles.container}>
      <Page type="home">
        <div className={styles.home}>
          {/* Hero */}
          <div className={styles.hero}>
            <h1>Find and upload trending beat for music production</h1>
            <p>Preview, upload, buy beats and vocals for you projects</p>
            <div className={styles.hero__search_group}>
              <div className={styles.hero__search}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={handleSearchInput}
                  onKeyDown={handleKeyDown}
                />
                <div className={styles.icon}>
                  <FiSearch size={20} color="#fff" />
                </div>
              </div>
              <div className={styles.btn}>
                <button type="button">
                  <Link href="/new-upload">UPLOAD YOUR BEATS</Link>
                </button>
              </div>
            </div>
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
