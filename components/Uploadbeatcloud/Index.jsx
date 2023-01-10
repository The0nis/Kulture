import style from "./uploadbeatcloud.module.scss";
import Image from "next/image";
import cloud from "../../assets/cloud.svg";
import Page from "../Page";
import { useState } from "react";

function Uploadbeatcloud() {
  //declaring state for the input files
  const [file, setFile] = useState();
  const [valid, setValid] = useState(false);

  //function to handle the file
  const handleChange = (e) => {
    // console.log(e.target.files);

    const { type } = e.target.files[0];
    if (
      type === "image/png" ||
      type === "image/svg" ||
      type === "image/jpeg" ||
      type === "image/gif" ||
      type === "image/tiff"
    ) {
      setValid(true);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <Page>
        <div className={style.cloudtextdiv}>
          <p className={style.cloudtext}>Upload your beats to Kulture</p>
        </div>
        <label>
          <div className={style.cloudcontainer}>
            {/* if the image have not been selected display this */}
            {!valid && (
              <div className={style.wrap}>
                <div className={style.cloud_image}>
                  <Image src={cloud} alt="musicapp" />
                </div>

                <div className={style.cloudtextdiv}>
                  <p className={style.cloudtext1}>
                    Browse for files or drag and drop them here
                  </p>
                </div>

                <div className={style.cloudtextdiv}>
                  <p className={style.cloudtext2}>Max. File Size: 500 MB</p>
                </div>
              </div>
            )}

            {/* if a valid image have  been selected display  this */}
            {valid && (
              <div
                className={style.b_img}
                style={{
                  backgroundImage: `url(${file})`,
                  backgroundSize: "cover",
                  backgroundReapet: "no-repeat",
                }}
              ></div>
            )}
          </div>
          <div className={style.input_field}>
            <input type="file" onChange={handleChange} accept="image/*" />
          </div>
        </label>

        <div className={style.upload_btn}>
          <button className={style.back_btn}>Back</button>
          <button className={style.next_btn}>Next</button>
        </div>
      </Page>
    </div>
  );
}

export default Uploadbeatcloud;
