import style from './trendingsearch.module.scss';

import React from 'react';

function trendingsearch() {
  return (
    <div className={style.trendingsearchcontainer}>
      <div className={style.searchcontainer}>
        <p className={style.Search_text}>Trending Search</p>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>IamDonemmy</p>
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>TheOnis</p>
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>Odizee</p>
        </div>
      </div>

      <div className={style.searchcontainer1}>
        <div className={style.search_div}>
          <p>Drew-chidi</p>
        </div>
      </div>
    </div>
  );
}

export default trendingsearch;
