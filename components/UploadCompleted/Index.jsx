import style from './uploadcompleted.module.scss';
import Image from 'next/image';
import tickcircle from '../../assets/tickcircle.svg';

import React from 'react';

function UploadCompleted() {
  return (
    <div className={style.containeruploadcompleted}>
      <div className={style.uploadcompleted_image}>
        <Image src={tickcircle} alt="tickcircle" />
      </div>

      <div className={style.uploadcompleted_text}>
        <p>
          Upload <br></br> Completed
        </p>
      </div>

      <div className={style.uploadcompleted_text1}>
        <p className={style.uploadcompleted_text3}>
          Awaiting review from Admin
        </p>
      </div>
    </div>
  );
}

export default UploadCompleted;
