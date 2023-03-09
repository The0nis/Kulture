import Link from "next/link";
import style from "./uploadbeatview.module.scss";
import Image from "next/image";
import musicapp from "../../assets/Musicapp.svg";
import music from "../../assets/Music.svg";
import musicfolder from "../../assets/musicfolder.svg";
import Page from "../Page";

function Uploadbeatview() {
  return (
    <div>
      <Page>
        <div>
          <p className={style.uploadbeatext}>Please select your upload type:</p>
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
          <button className={style.uploadbeatbtn}>
            <Link href='/uploadbeatcloud'>NEXT</Link>
          </button>
        </div>
      </Page>
    </div>
  );
}

export default Uploadbeatview;
