import React, { useState } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './Signup.module.css';
import Link from 'next/link';
import { MdStarRate } from 'react-icons/md';
import PasswordStrengthBar from 'react-password-strength-bar';

const Signup = () => {
  const [inputValue, setInputValue] = useState('');
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      //   console.log(JSON.stringify(data, null, 2));
    },
  });


  //Password strength call function
  const funcCall = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={style.signup_wrapper}>

      <div className={style.signup_header}>
        <div className={style.signup_logo}>
          <Image src={logo} alt='logo' />
        </div>
        <div className={style.signup_text}>
          <p>Kindly provide the details below to get started</p>
        </div>

      </div>
      <div className={style.register_form}>
        <form onSubmit={formik.handleSubmit} className={style.forms}>
          <div className={style.form_sectiona}>
            <div className={style.form_group}>
              <label htmlFor="firstname">Full Name</label>
              <div className={style.input_wrap || style.inputsec}>
                <input
                  name="firstname"
                  type="text"
                  className={`${
                    style.form_control +
                    (formik.errors.fullname && formik.touched.fullname
                      ? style.is_invalid
                      : '')
                  }`}
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                />
              </div>

              <div className={style.invalid_feedback}>
                {formik.errors.fullname && formik.touched.fullname
                  ? formik.errors.firstname
                  : null}
              </div>
            </div>

            <div className={style.form_group}>
              <label htmlFor="lastname">Last Name</label>
              <div className={style.input_wrap || style.inputsec}>
                <input
                  name="lastname"
                  type="text"
                  className={`${
                    style.form_control +
                    (formik.errors.fullname && formik.touched.fullname
                      ? style.is_invalid
                      : '')
                  }`}
                  onChange={formik.handleChange}
                  value={formik.values.lastnamename}
                />
              </div>

              <div className={style.invalid_feedback}>
                {formik.errors.fullname && formik.touched.fullname
                  ? formik.errors.lastname
                  : null}
              </div>
            </div>
          </div>

          <div className={style.form_group}>
            <label htmlFor="email"> Email </label>
            <div className={style.input_wrap}>
              <input
                name="email"
                type="email"
                className={`${
                  style.form_control +
                  (formik.errors.fullname && formik.touched.fullname
                    ? style.is_invalid
                    : '')
                }`}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className={style.invalid_feedback}>
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null}
            </div>
          </div>
          <div className={style.form_group}>
            <label htmlFor="username"> Choose a Username </label>

            <div className={style.input_wrap}>
              <input
                name="username"
                type="text"
                className={`${
                  style.form_control +
                  (formik.errors.fullname && formik.touched.fullname
                    ? style.is_invalid
                    : '')
                }`}
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div className={style.invalid_feedback}>
              {formik.errors.username && formik.touched.username
                ? formik.errors.username
                : null}
            </div>
          </div>

          <div className={style.form_group}>
            <label htmlFor="password"> Password </label>
            <div className={style.input_wrap}>
              <input
                name="password"
                type="password"
                className={`${
                  style.form_control +
                  (formik.errors.fullname && formik.touched.fullname
                    ? style.is_invalid
                    : '')
                }`}
                onChange={formik.handleChange && funcCall}
                value={formik.values.password || inputValue}
              />
            </div>
            <div className={style.invalid_feedback}>
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null}
            </div>
          </div>

          <div className={style.form_group}>
            <label htmlFor="confirmPassword"> Confirm Password </label>
            <div className={style.input_wrap}>
              <input
                name="confirmPassword"
                type="password"
                className={`${
                  style.form_control +
                  (formik.errors.fullname && formik.touched.fullname
                    ? style.is_invalid
                    : '')
                }`}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </div>
            <div className={style.invalid_feedback}>
              {formik.errors.confirmPassword && formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : null}
            </div>
          </div>
          <PasswordStrengthBar
            password={inputValue}
            minLength={5}
            onChangeScore={(score, feedback) => {
              console.log(score, feedback);
            }}
          />
          <div className={style.notification}>
            <div>
              <MdStarRate className={style.star}/>
            </div>
            <div className={style.notification_content}>
              <p>
                Passwords must be at least 8 characters in length, at least one
                uppercase character, at least one lowercase character, and must
                contain at least one digit character OR a symbol.
              </p>
            </div>
          </div>
          <div className={style.form_groups || style.form_check}>
            <div className={style.checker}>
              <input
                name="acceptTerms"
                type="checkbox"
                className={`${
                  style.form_control +
                  (formik.errors.fullname && formik.touched.fullname
                    ? style.is_invalid
                    : '')
                }`}
                onChange={formik.handleChange}
                value={formik.values.acceptTerms}
              />
            </div>
            <label htmlFor="acceptTerms" className={style.form_check_label}>
              By checking the box, you accept Kulture’s{' '}
              <Link href="/#" className={style.terms}>
                Terms and Conditions
              </Link>
            </label>
            <div>
            <div className={style.invalid_feedbacks}>
              {formik.errors.acceptTerms && formik.touched.acceptTerms
                ? formik.errors.acceptTerms
                : null}
            </div>
            </div>
          </div>
          

          <div className={style.form_group}>
            <button type="submit" className={style.btn}>
              Sign Up
            </button>
            {/* <button type="button" className="" onClick={formik.handleReset}>
              Reset
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
