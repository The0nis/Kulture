import style from './uploadbeatcloud.module.scss';
import Image from 'next/image';
import cloud from '../../assets/cloud.svg';



function Uploadbeatcloud() {
  return (
    <div> 
        <div className={style.cloudtextdiv}>
          <p className={style.cloudtext}>Upload your beats to Kulture</p> 
        </div>

        <div className={style.cloudcontainer}>
           
            <div className={style.cloud_image}>
            <Image src={cloud} alt="musicapp" />
            </div>

            <div className={style.cloudtextdiv}>
          <p className={style.cloudtext1}>Browse for files or drag and drop them here</p> 
            </div>

            <div className={style.cloudtextdiv}>
          <p className={style.cloudtext2}>Max. File Size: 500 MB</p> 
             </div>

        </div>

            <div className={style.upload_btn}>
                <button className={style.back_btn}>Back</button>
                <button className={style.next_btn}>Next</button>
            </div>







    </div>
  )
}

export default Uploadbeatcloud