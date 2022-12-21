import style from './trendingsearch.module.scss';

import React from 'react';

function trendingsearch() {
  return (
    <div>
      <div className={style.searchcontainer}>
        <p className={style.Search_text}>Trending Search</p>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>IamDonemmy</p>
        </div>
        <div className={style.search_div1}>
          <p>Sponsored</p>
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>TheOnis</p>
        </div>
        <div className={style.search_div1}>
          <p>Sponsored</p>
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>Odizee</p>
        </div>
        <div className={style.search_div1}>
          <p>Sponsored</p>
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>Drew-chidi</p>
        </div>
        <div className={style.search_div1}>
          <p>Sponsored</p>
        </div>
      </div>
    </div>
  );
}

export default trendingsearch;
