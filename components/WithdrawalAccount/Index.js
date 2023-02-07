import style from "./withdrawalaccount.module.scss";
import Image from "next/image";
import smalltickcircle from "../../assets/smalltickcircle.svg";

import React from "react";
import Page from "../Page";

function WithdrawalAccount() {
  return (
    <Page type="account">
      {/* Overall container */}
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

          {/* list of Account details */}
          <div className={style.withdrawallist}>
            <div className={style.withdrawal_flex}>
              <ul className={style.withdrawallistul}>
                <li className={style.withdrawallist}>Account Name</li>
                <li className={style.withdrawallist1}>Banny Anderson</li>{" "}
                <br></br>
              </ul>
              <ul className={style.withdrawallistul}>
                <li className={style.withdrawallist}>Account Number</li>
                <li className={style.withdrawallist1}>0224458394</li> <br></br>
              </ul>
            </div>

            <div className={style.withdrawal_flex1}>
              <ul className={style.withdrawallistul}>
                <li className={style.withdrawallist}>Bank Name</li>
                <li className={style.withdrawallist1}>GTBank</li>
                <br></br>
              </ul>
              <ul className={style.withdrawallistul}>
                <li className={style.withdrawallist}>Sort Code</li>
                <li className={style.withdrawallist1}>00234</li>
                <br></br>
              </ul>
            </div>
          </div>

          <div className={style.withdrawaleditbtn}>
            <button className={style.edit_btn}>Edit</button>
          </div>
        </div>

        {/* Metadata code */}
        <div className={style.meta_data}>
          <div className={style.withdrawalaccount_metadata}>
            <div className={style.withdrawal_image}>
              <Image src={smalltickcircle} alt="tickcircle" />
            </div>
            <div>
              <p className={style.withdrawalmetadata}>Meta data</p>
            </div>
          </div>
          <div className={style.withdrawalmetadataover}>
            <label className={style.withdrawal_label}>Amount</label> <br></br>
            <input
              className={style.withdrawal_input}
              type="text"
              placeholder=" NGN 0:00 "
            ></input>
          </div>

          <div className={style.withdrawalmetadataover1}>
            <div className={style.withdrawalinput_label_con}>
              <label className={style.withdrawal_label1}>OTP</label> <br></br>
              <div className={style.inputbtn}>
                <input className={style.withdrawal_input1} type="text"></input>
                <div className={style.withdrawalsendotp}>
                  <button className={style.otp_btn}>Send OTP</button>
                </div>
              </div>
            </div>
            {/*Complete button code  */}
            <div className={style.withdrawalcompletebtn}>
              <button className={style.complete_btn}>COMPLETE</button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default WithdrawalAccount;
