import React, { useState } from "react";
import style from "./Signup.module.css";
import ModalWrap from "../ModalWrapper/ModalWrap";
import { CgCloseO } from "react-icons/cg";
import { Formik } from "formik";
import { useLoginUserMutation } from "../../../state/services/LoginApi";

function SignupModal({ toggleModal }) {
  // TOGGLE MENU
  const [toggle, setToggle] = useState(false);
  const [login, { data, isLoading, isSuccess, isError, error }] =
    useLoginUserMutation();

  //   Toggle Function
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  //FORMS VALIDATION
  const initialValues = {
    email: "",
    password: "",
  };

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
  const submitForm = (values) => {
    login(values);
  };

  return (
    <ModalWrap>
      <div className={`${!toggle ? style.backdrop : style.hidebackdrop}`}>
        <div className={style.navbar_close} onClick={toggleModal}>
          <CgCloseO size={20} color="fff" className={style.close} />
        </div>
        <div className={style.text_wrap}>
          <h3>Signin</h3>
          <p>
            Signin Enter details to signin, dont have an account,
            <br />
            Signup
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

                      <div className={style.display_error}>
                        {errors.email && touched.email && (
                          <span className={style.error}>{errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className={style.form_row}>
                      <div className={style.labels}>
                        <label className={style.input_label} htmlFor="password">
                          Password
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
                    </div>

                    <button
                      type="submit"
                      className={`${
                        !(dirty && isValid) ? style.disabled_btn : ""
                      } ${style.btn}`}
                      disabled={!(dirty && isValid)}
                    >
                      Signin
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
