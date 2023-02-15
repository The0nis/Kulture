import React from "react";
import style from "./checkout.module.scss";
import Image from "next/image";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import Page from "../Page";

function CheckOut() {
  return (
    <Page type="account">
      <div className={style.checkout_container}>
        <div className={style.checkout_overall}>
          <div>
            <p className={style.addpayment}>Add Payment Details</p>
          </div>

          <div className={style.image_checkout}>
            <div className={style.visa_img}>
              <Image src={visa} alt="visa" />
            </div>
            <div className={style.mastercard_img}>
              <Image src={mastercard} alt="mastercard" />
            </div>
          </div>

          {/* Starting of the Form code */}
          <div className={style.wrapper}>
            <div className={style.fname}>
              <label> First Name </label>
              <input
                className={style.input_name}
                type="text"
                placeholder=" Emmanuel "
              ></input>
            </div>

            <div className={style.lname}>
              <label> Last Name </label>
              <input
                className={style.input_name}
                type="text"
                placeholder=" Abiodun "
              ></input>
            </div>

            <div className={style.card_number}>
              <label> Card Number </label>
              <input
                className={style.input_number}
                type="Number"
                placeholder=" 5465 7875 4553 9697 "
              ></input>
            </div>

            {/* Expiration and Cvv code */}
            <div className={style.cvvex}>
              <div className={style.ex}>
                <label htmlFor="exp">expiration date (MM/YY)</label>
                <input className={style.input_ex} type="number" id="exp" />
              </div>

              <div className={style.cv}>
                <label htmlFor="cvv">CVV</label>
                <input className={style.input_cv} type="number" id="cvv" />
              </div>
            </div>

            <div>
              <p className={style.charges}>Additional Bank charges may apply</p>
            </div>

            {/* Button code */}
            <div>
              <button type="submit" className={style.checkout_btn}>
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* End of the code */}
      </div>
    </Page>
  );
}

export default CheckOut;
