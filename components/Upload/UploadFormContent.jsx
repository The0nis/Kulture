import React, { useState } from "react";
import Image from "next/image";
import camera from "../../assets/camera.svg";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import style from "./UploadFormContent.module.css";
import Page from "../Page";
import { useRouter } from "next/router";
import { navigateBack } from "../../util";

const UploadFormContent = () => {
  let [percentRange, setProgress] = useState(0);

  const [entryProducer, setEntryProducer] = useState("");
  const [nameOfBeat, setNameOfBeat] = useState("");
  const [genreInput, setGenreInput] = useState("");
  const [file, setFile] = useState();
  const [price, setPrice] = useState("");

  const [visited, setVisited] = useState(0);
  const [beatVisited, setBeatVisited] = useState(0);
  const [genreVisited, setGenreVisited] = useState(0);
  const [fileVisited, setFileVisited] = useState(0);
  const [priceVisited, setPriceVisited] = useState(0);

  const router = useRouter();

  // Route to the complete page, then route to the homepage
  const submitHandler = () => {
    router.push("/uploadcompleted");
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  const validationSchema = Yup.object().shape({
    producer: Yup.string().required("producer name is required"),
    nameofbeat: Yup.string().required("The Name of Beat is required"),
    price: Yup.string()
      .required("Price is required")
      .min(2, "Price must be at least 2 characters")
      .max(20, "Price must not exceed 20 characters"),
  });

  const formik = useFormik({
    initialValues: {
      producer: "",
      nameofbeat: "",
      genre: "",
      price: "",
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      //   console.log(JSON.stringify(data, null, 2));
    },
  });

  const Range = (props) => {
    return (
      // render current the filled range of progress bar along its width
      <div
        className={style.range}
        style={{ width: `${props.percentRange}%` }}
      />
    );
  };

  const ProgressBar = (props) => {
    return (
      <div className={style.progress_bar}>
        {/*render available progress bar’s limit*/}
        <Range percentRange={props.percentRange} />
      </div>
    );
  };

  // A list for the genres....to be mapped later
  const nameOptions = [
    { label: "Choose a genre", value: "" },
    { label: "Fiction", value: "Fiction" },
    { label: "Natural", value: "Natural" },
    { label: "Novel", value: "Novel" },
    { label: "Natural", value: "Natural" },
    { label: "Fantansy", value: "Fantansy" },
    { label: "Thriller", value: "Thriller" },
    { label: "Drama", value: "Drama" },
  ];

  const handleChange = (e) => {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    if (file != "") {
      setFileVisited(1);
      if (fileVisited == 0) {
        return setTimeout(
          setProgress(percentRange < 100 ? percentRange + 20 : 100),
          5000
        );
      }
    } else {
      setProgress(percentRange > 0 ? percentRange - 20 : 0);
      setVisited(0);
    }
  };
  const handleOnChangeProducer = (event) => {
    setEntryProducer(event.target.value);
    if (entryProducer.length != 0) {
      setVisited(1);
      if (visited == 0) {
        return setTimeout(
          setProgress(percentRange < 100 ? percentRange + 20 : 100),
          5000
        );
      }
    }
    // else {
    //   setProgress(percentRange > 0 ? percentRange - 20 : 0);
    //   setVisited(0);
    // }
  };

  const handleOnChangeBeat = (event) => {
    setNameOfBeat(event.target.value);
    if (nameOfBeat.length != "") {
      setBeatVisited(1);
      if (beatVisited == 0) {
        return setTimeout(
          setProgress(percentRange < 100 ? percentRange + 20 : 100),
          5000
        );
      }
    }
    // else {
    //   setProgress(percentRange > 0 ? percentRange - 20 : 0);
    //   setBeatVisited(0);
    // }
  };

  const handleChangeGenre = (event) => {
    setGenreInput(event.target.value);
    if (genreInput[genreInput.length] != 0) {
      setGenreVisited(1);
      if (genreVisited == 0) {
        return setTimeout(
          setProgress(percentRange < 100 ? percentRange + 20 : 100),
          5000
        );
      }
    }
    // else {
    //   setProgress(percentRange > 0 ? percentRange - 20 : 0);
    //   setBeatVisited(0);
    // }
  };

  const handleOnChangePrice = (event) => {
    setPrice(event.target.value);
    if (price.length != "") {
      setPriceVisited(1);
      if (priceVisited == 0) {
        return setTimeout(
          setProgress(percentRange < 100 ? percentRange + 20 : 100),
          5000
        );
      }
    }
    // else {
    //   setProgress(percentRange > 0 ? percentRange - 20 : 0);
    //   setBeatVisited(0);
    // }
  };

  return (
    <Page>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.section_a}>
            <p>Beats by Winifred</p>
            <div className={style.sectiona_cont}>
              <div className={style.progress_wrapper}>
                <ProgressBar percentRange={percentRange} />
              </div>

              <div className={style.complete}>
                <p>Complete</p>
              </div>
            </div>
          </div>

          <div className={style.body_wrapper}>
            <div className={style.section_b}>
              <div
                className={style.b_img}
                style={{
                  backgroundImage: `url(${file})`,
                  backgroundSize: "cover",
                  backgroundReapet: "no-repeat",
                }}
              >
                {/* image fuctionality goes here */}
                <div className={style.image_btn}>
                  <button type='submit'>
                    <Image src={camera} alt={camera} /> Upload image
                  </button>
                </div>
                <div className={style.image_input}>
                  <input type='file' onChange={handleChange} accept='image/*' />
                </div>
                {/* <img src={file} /> */}
              </div>
              <div>
                <p>Max. File Size: 500 MB</p>
              </div>
            </div>

            <div className={style.register_form}>
              <form onSubmit={formik.handleSubmit} className={style.forms}>
                <div className={style.form_sectiona}>
                  <div className={style.form_group}>
                    <label htmlFor='producer'>Producer(s)</label>
                    <div className={style.input_wrap || style.inputsec}>
                      <input
                        name='producer'
                        type='text'
                        className={`${
                          style.form_control +
                          (formik.errors.producer && formik.touched.producer
                            ? style.is_invalid
                            : "")
                        }`}
                        onChange={formik.handleChange}
                        onKeyDown={handleOnChangeProducer}
                        value={formik.values.producer}
                      />
                    </div>

                    <div className={style.invalid_feedback}>
                      {formik.errors.producer && formik.touched.producer
                        ? formik.errors.producer
                        : null}
                    </div>

                    <div className={style.form_group}>
                      <label htmlFor='nameofbeat'>Name of Beat</label>
                      <div className={style.input_wrap || style.inputsec}>
                        <input
                          name='nameofbeat'
                          type='text'
                          className={`${
                            style.form_control +
                            (formik.errors.nameofbeat &&
                            formik.touched.nameofbeat
                              ? style.is_invalid
                              : "")
                          }`}
                          onChange={formik.handleChange}
                          onKeyDown={handleOnChangeBeat}
                          value={formik.values.nameofbeat}
                        />
                      </div>

                      <div className={style.invalid_feedback}>
                        {formik.errors.nameofbeat && formik.touched.nameofbeat
                          ? formik.errors.nameofbeat
                          : null}
                      </div>
                    </div>

                    <div className={style.form_group}>
                      <label htmlFor='genre'>Genre</label>
                      <div className={style.input_wrap || style.inputsec}>
                        <select
                          name='genre'
                          defaultValue={genreInput}
                          onChange={handleChangeGenre}
                          className={`${
                            style.form_control +
                            (formik.errors.genre && formik.touched.genre
                              ? style.is_invalid
                              : "")
                          }`}
                          style={{ display: "block" }}
                        >
                          {nameOptions.map((option, idx) => (
                            <option value={option.value} key={idx}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className={style.invalid_feedback}>
                        {formik.errors.genre && formik.touched.genre
                          ? formik.errors.genre
                          : null}
                      </div>
                    </div>

                    <div className={style.form_group}>
                      <label htmlFor='price'>Price</label>
                      <div className={style.input_wrap || style.inputsec}>
                        <input
                          name='price'
                          type='number'
                          className={`${
                            style.form_control +
                            (formik.errors.price && formik.touched.price
                              ? style.is_invalid
                              : "")
                          }`}
                          onChange={formik.handleChange}
                          onKeyDown={handleOnChangePrice}
                          value={formik.values.price}
                        />
                      </div>

                      <div className={style.invalid_feedback}>
                        {formik.errors.price && formik.touched.price
                          ? formik.errors.price
                          : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={style.btn_group}>
                  <button
                    type='button'
                    className={style.back_btn}
                    // onClick={formik.handleReset}
                    onClick={navigateBack}
                  >
                    Back
                  </button>
                  <button
                    type='submit'
                    className={style.btn}
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default UploadFormContent;
