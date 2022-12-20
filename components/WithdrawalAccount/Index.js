import style from './withdrawalaccount.module.scss';
import Image from 'next/image';
import smalltickcircle from '../../assets/smalltickcircle.svg';

import React from 'react';

function WithdrawalAccount() {
  return (

    // Overall container
    <div className={style.overallwrapper}>
      <div>
        <p className={style.withdrawalaccounttext1}>Withdrawal</p>
      </div>

      {/* Account Information container */}
      <div className={style.withdrawalaccount_con}>

      <div className={style.withdrawalaccount_flex}>
        <div className={style.withdrawal_image}>
          <Image src={smalltickcircle} alt="tickcircle" />
        </div>
        <div>
          <p className={style.withdrawalaccountinfo}>Account Information</p>
        </div>
      </div>

      <div className={style.withdrawallist}>
        <ul className={style.withdrawallistul}>
            <li className={style.withdrawallist}>Account Name</li>
            <li className={style.withdrawallist1}>Banny Anderson</li>
        </ul>
        <ul className={style.withdrawallistul}>
            <li className={style.withdrawallist}>Account Number</li>
            <li className={style.withdrawallist1}>0224458394</li>
        </ul>
        <ul className={style.withdrawallistul}>
            <li className={style.withdrawallist}>Bank Name</li>
            <li className={style.withdrawallist1}>GTBank</li>
        </ul>
        <ul className={style.withdrawallistul}>
            <li className={style.withdrawallist}>Sort Code</li>
            <li className={style.withdrawallist1}>00234</li>
        </ul>
      </div>

      </div>
    </div>
  );
}

export default WithdrawalAccount;
