import style from "./ActionCompleted.module.scss";
import Image from "next/image";
import tickcircle from "../../assets/tickcircle.svg";

import React from "react";

function ActionCompleted({ title, description }) {
  return (
    <div className={style.containeruploadcompleted}>
      <div className={style.uploadcompleted_image}>
        <Image src={tickcircle} alt='tickcircle' />
      </div>

      <div className={style.uploadcompleted_text}>
        <p>{title}</p>
      </div>

      <div className={style.uploadcompleted_text1}>
        <p className={style.uploadcompleted_text3}>{description}</p>
      </div>
    </div>
  );
}

export default ActionCompleted;
