import style from "./trendingsearch.module.scss";
import Link from "next/link";

import React from "react";

function Trendingsearch() {
  return (
    <div className={style.trendingsearchcontainer}>
      <div className={style.searchcontainer}>
        <p className={style.Search_text}>Trending Search</p>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>
            <Link href='/profile'>IamDonemmy</Link>
          </p>
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>
            <Link href='/profile'>IamDonemmy</Link>
          </p>{" "}
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>
            <Link href='/profile'>IamDonemmy</Link>
          </p>{" "}
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>
            <Link href='/profile'>IamDonemmy</Link>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Trendingsearch;
