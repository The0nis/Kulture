import Link from "next/link";
import style from "./uploadbeatview.module.scss";
import Image from "next/image";
import musicapp from "../../assets/Musicapp.svg";
import music from "../../assets/Music.svg";
import musicfolder from "../../assets/musicfolder.svg";
import Page from "../Page";
import { animate, motion } from "framer-motion";
import ButtonLink from "../Button";

function UploadBeatViewContent() {
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
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <Page>
        <motion.div variants={stagger}>
          <motion.div variants={fadeInUp}>
            <div>
              <p className={style.uploadbeatext}>
                Please select your upload type:
              </p>
            </div>

            {/* First container */}
            <div className={style.maincontainer}>
              <div className={style.uploadcontainer}>
                <div className={style.upload_image}>
                  <Image src={musicapp} alt='musicapp' />
                </div>
                <p className={style.uploadtext}>Single</p>
              </div>

              {/* Second container */}
              <div className={style.uploadcontainer1}>
                <div className={style.upload_image}>
                  <Image src={music} alt='musicfolder' />
                </div>
                <p className={style.uploadtext1}>EP (Extended Plays)</p>
              </div>

              {/* Third container */}
              <div className={style.uploadcontainer2}>
                <div className={style.upload_image}>
                  <Image src={musicfolder} alt='musicfolder' />
                </div>
                <p className={style.uploadtext2}>LP (Long Plays)</p>
              </div>
            </div>

            {/* Button codes */}
            <div className={style.btn_container}>
              {/* <button className={style.uploadbeatbtn}>
                <Link href="/new-upload/upload-beat">NEXT</Link>
              </button> */}
              <ButtonLink page='new-upload/upload-beat' title='NEXT' />
            </div>
          </motion.div>
        </motion.div>
      </Page>
    </motion.div>
  );
}

export default UploadBeatViewContent;
