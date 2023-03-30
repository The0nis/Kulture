import style from "./uploadbeatcloud.module.scss";
import Link from "next/link";
import Image from "next/image";
import cloud from "../../assets/cloud.svg";
import Page from "../Page";
import { useState } from "react";
import { navigateBack } from "../../util";
import { motion } from "framer-motion";

function UploadBeatContent() {
  //declaring state for the input files
  const [file, setFile] = useState();
  const [valid, setValid] = useState(false);

  //function to handle the file
  const handleChange = (e) => {
    // console.log(e.target.files);

    const file = e.target.files[0];
    if (file.type.startsWith("audio/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile(event.target.result);
        setValid(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // Animation declaration
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Page>
        <motion.div variants={stagger}>
          <motion.div variants={fadeInUp}>
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

                {/* if a valid file have  been selected display  this */}
                {/* {valid && (
              <div
                className={style.b_img}
                style={{
                  backgroundImage: `url(${file})`,
                  backgroundSize: "cover",
                  backgroundReapet: "no-repeat",
                }}
              ></div>
            )} */}

                {valid && (
                  <div className={style.musicContainer}>
                    <div className={style.musicInfo}>
                      <p className={style.musicName}>{file.name}</p>
                      {file.image && (
                        <img src={file.image} className={style.musicImage} />
                      )}
                    </div>
                    <audio
                      controls
                      className={style.audioPlayer}
                      src={file}
                    ></audio>
                  </div>
                )}
              </div>
              <div className={style.input_field}>
                <input type="file" onChange={handleChange} accept="audio/*" />
              </div>
            </label>

            <div className={style.upload_btn}>
              <button className={style.back_btn} onClick={navigateBack}>
                Back
              </button>
              <button className={style.next_btn}>
                <Link href="/new-upload/upload-form">Next</Link>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Page>
    </motion.div>
  );
}

export default UploadBeatContent;
