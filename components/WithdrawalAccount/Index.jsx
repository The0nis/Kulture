import { useState } from "react";
import styles from "./withdrawalaccount.module.scss";
import Image from "next/image";
import smalltickcircle from "../../assets/smalltickcircle.svg";
import tickcircleblack from "../../assets/tickcircleblack.svg";

import Page from "../Page";
import { Field, Form, Formik } from "formik";

function WithdrawalAccount() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleSubmit = async (values) => {
    setToggle(true);
  };
  return (
    <div>
      <div className={styles.accountinfo}>
        <div className={styles.accountinfo__head}>
          <div className={styles.tick}>
            <Image src={smalltickcircle} alt="tick" />
          </div>
          <h2>Account Information</h2>
          {toggle ? (
            <button onClick={handleToggle}>Edit</button>
          ) : (
            <button onClick={handleSubmit}>Save</button>
          )}
        </div>
        {!toggle ? (
          <div className={styles.accountinfo__form}>
            <Formik
              initialValues={{
                accountname: "",
                bankname: "",
                accountnumber: "",
                sortcode: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className={styles.formone}>
                    <div className={styles.form_group}>
                      <label htmlFor="accountname">Account Name</label>
                      <Field
                        id="accountname"
                        name="accountname"
                        placeholder="Account Name "
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="bankname">Bank Name</label>
                      <Field
                        id="bankname"
                        name="bankname"
                        placeholder="Bank Name "
                      />
                    </div>
                  </div>
                  <div className={styles.formtwo}>
                    <div className={styles.form_group}>
                      <label htmlFor="accountnumber">Account Number</label>
                      <Field
                        id="accountnumber"
                        name="accountnumber"
                        placeholder="Account Number"
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="sortcode">Sort Code</label>
                      <Field
                        id="sortcode"
                        name="sortcode"
                        placeholder="Sort Code"
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            ) :{" "}
          </div>
        ) : (
          <div className={styles.saved}>
            <div className={styles.saveditem}>
              <h3>Account Name</h3>
              <p className={styles.content}>Banny Anderson</p>
            </div>
            <div className={styles.saveditem}>
              <h3>Bank Name</h3>
              <p className={styles.content}>GTBank</p>
            </div>
            <div className={styles.saveditem}>
              <h3>Account Number</h3>
              <p>0224458394</p>
            </div>
            <div className={styles.saveditem}>
              <h3>Sort Code</h3>
              <p>00234</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.metadata}>
        <div className={styles.tick}>
          <Image src={tickcircleblack} alt="tick" />
        </div>
        <h2>Meta</h2>
        <div className={styles.metadata__form}>
          <Formik
            initialValues={{
              accountname: "",
              bankname: "",
              accountnumber: "",
              sortcode: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.formone}>
                  <div className={styles.form_group}>
                    <label htmlFor="amount">Amount</label>
                    <Field id="amount" name="amount" placeholder="Amount" />
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="otp">OTP</label>
                    <div className={styles.inputbtn}>
                      <Field id="otp" name="otp" placeholder="OTP" />
                      <button>Send OTP</button>
                    </div>
                  </div>
                </div>
                <button>COMPLETE</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default WithdrawalAccount;
