import style from './withdrawalcompleted.module.scss';
import Image from 'next/image';
import tickcircle from '../../assets/tickcircle.svg';
import React from 'react';

function withdrawalcompleted() {
  return (
    <div className={style.containerwithdrawal}>
      <div className={style.withdrawal_image}>
        <Image src={tickcircle} alt="tickcircle" />
      </div>

      <div className={style.withdrawal_text}>
        <p>
          Withdrawal <br></br> Completed
        </p>
      </div>

      <div className={style.withdrawal_text1}>
        <p className={style.withdrawal_text3}>
          You will be credited within <br></br> the next 24 Hours
        </p>
      </div>
    </div>
  );
}

export default withdrawalcompleted;
