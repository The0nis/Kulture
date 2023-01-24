import React from "react";
import style from "./checkout.module.scss";
import Image from "next/image";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import Page from "../Page";
import { useState } from "react";

function CheckOut() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [cardno, setCardno] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  async function addPaymentDetails() {
    console.warn(fname, lname, cardno, exp, cvv);
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("cardno", cardno);
    formData.append("exp", exp);
    formData.append("fname", cvv);
    let result = fetch("", {
      method: "POST",
      body: formData,
    });

    alert("Continue to the next page");
  }

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
                onChange={(e) => setFname(e.target.value)}
                placeholder=" Emmanuel "
              ></input>
            </div>

            <div className={style.lname}>
              <label> Last Name </label>
              <input
                className={style.input_name}
                type="text"
                onChange={(e) => setLname(e.target.value)}
                placeholder=" Abiodun "
              ></input>
            </div>

            <div className={style.card_number}>
              <label> Card Number </label>
              <input
                className={style.input_number}
                type="Number"
                onChange={(e) => setCardno(e.target.value)}
                placeholder=" 5465 7875 4553 9697 "
              ></input>
            </div>

            {/* Expiration and Cvv code */}
            <div className={style.cvvex}>
              <div className={style.ex}>
                <label htmlFor="exp">expiration date (MM/YY)</label>
                <input
                  className={style.input_ex}
                  type="text"
                  onChange={(e) => setExp(e.target.value)}
                  id="exp"
                />
              </div>

              <div className={style.cv}>
                <label htmlFor="cvv">CVV</label>
                <input
                  className={style.input_cv}
                  type="number"
                  onChange={(e) => setCvv(e.target.value)}
                  id="cvv"
                />
              </div>
            </div>

            <div>
              <p className={style.charges}>Additional Bank charges may apply</p>
            </div>

            {/* Button code */}
            <div>
              <button
                onClick={addPaymentDetails}
                type="submit"
                className={style.checkout_btn}
              >
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
