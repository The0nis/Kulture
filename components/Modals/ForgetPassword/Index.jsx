import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import style from "./forgetpassword.module.css";
import ModalWrap from "../ModalWrapper/ModalWrap";
import { CgCloseO } from "react-icons/cg";
import { Formik } from "formik";
import { useGetPasswordMutation } from "../../../state/services/ForgetPasswordApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupModal() {
  // TOGGLE MENU
  const [toggle, setToggle] = useState(false);

  //   Toggle Function
  const toggleMenu = () => {
    setToggle(!toggle);
  };
//CALLINNG THE HOOK FUNCTION AND ALSO  DESTRUCTING THE STATE
  const [forgetpassword, { isLoading, error, isSuccess }] = useGetPasswordMutation();

  //FORMS VALIDATION
  const initialValues = {
    email: "",
    otp: "",
    password: "",
    confirmpassword: "",
  };

  //TO HANDLE DIFFERENT STATE  OF THE RESPONSE
  useEffect(() => {
    if (isSuccess) {
      toast.success("Sucessfully Registered");
      formik.handleReset();
    }
    if (error) {
      toast.error("An error occured");
    }
    if (isLoading) {
      toast.info("In progress...");
    }
  }, [isSuccess, error]);

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password too short";
    }
    return errors;
  };

  //GETTING FORM DATA
  const submitForm = async (data) => {
    //getting the form  data and sending it to  the backend
    // alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    const {
      email,
      password,
      confirmPassword,
    } = data;
    try {
      await forgetpassword({
        email,
        password,
        confirmPassword,
      });
    } catch (error) {
      alert(error);
    }
  };

  // API function and code
  // const [getpassword] = useGetPasswordMutation();

  // const handleOtp = () => {};

  return (
    <ModalWrap>
      <div className={`${!toggle ? style.backdrop : style.hidebackdrop}`}>
        <div className={style.navbar_close} onClick={toggleMenu}>
          <CgCloseO size={20} color="fff" className={style.close} />
        </div>
        <div className={style.text_wrap}>
          <h3>Forgot Password</h3>
          <p>
            Enter details to change password or{" "}
            <span className={style.span_header}>signin</span>
          </p>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={submitForm}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                isValid,
                dirty,
              } = formik;
              return (
                <div className={style.container}>
                  <form onSubmit={handleSubmit} className={style.sign_form}>
                    <div className={style.form_row}>
                      <div>
                        <label htmlFor="email" className={style.input_label}>
                          Email address
                        </label>
                      </div>

                      <div className={style.email_otpbtn}>
                        <div className={style.input_wrapper}>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="andersonbanny@gmail.com"
                            className={`${
                              errors.email && touched.email
                                ? style.input_error
                                : null
                            } ${style.inputs}`}
                          />
                        </div>

                        <div>
                          <button
                            className={style.otp_btn}
                            onClick={() => handleOtp()}
                          >
                            Send OTP
                          </button>
                        </div>
                      </div>

                      <div className={style.display_error}>
                        {errors.email && touched.email && (
                          <span className={style.error}>{errors.email}</span>
                        )}
                      </div>

                      {/* OTP code */}
                      <div className={style.labels}>
                        <label className={style.input_label} htmlFor="otp">
                          OTP
                        </label>
                      </div>

                      <div className={style.password_wrap}>
                        <input
                          type="number"
                          name="otp"
                          id="otp"
                          value={values.otp}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${
                            errors.otp && touched.otp ? style.input_error : null
                          } ${style.inputs}`}
                        />
                      </div>

                      <div className={style.display_error}>
                        {errors.otp && touched.otp && (
                          <span className={style.error}>{errors.otp}</span>
                        )}
                      </div>

                      {/* End of OTP code */}
                    </div>

                    <div className={style.form_row}>
                      <div className={style.labels}>
                        <label className={style.input_label} htmlFor="password">
                          New Password
                        </label>
                      </div>

                      <div className={style.password_wrap}>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${
                            errors.password && touched.password
                              ? style.input_error
                              : null
                          } ${style.inputs}`}
                        />
                      </div>

                      <div className={style.display_error}>
                        {errors.password && touched.password && (
                          <span className={style.error}>{errors.password}</span>
                        )}
                      </div>

                      {/* Confirm password */}
                      <div className={style.labels}>
                        <label className={style.input_label} htmlFor="password">
                          Confirm Password
                        </label>
                      </div>

                      <div className={style.password_wrap}>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${
                            errors.password && touched.password
                              ? style.input_error
                              : null
                          } ${style.inputs}`}
                        />
                      </div>

                      <div className={style.display_error}>
                        {errors.password && touched.password && (
                          <span className={style.error}>{errors.password}</span>
                        )}
                      </div>

                      {/* End of Confirm password */}
                    </div>

                    <button
                      type="submit"
                      className={`${
                        !(dirty && isValid) ? style.disabled_btn : ""
                      } ${style.btn}`}
                      disabled={!(dirty && isValid)}
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </ModalWrap>
  );
}

export default SignupModal;
