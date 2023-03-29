import React from "react";
import { newUploadList } from "../../components/mockData";
import style from "./UploadCard.module.css";
import { AiOutlinePlayCircle } from "react-icons/ai";

const UploadCard = () => {
  return (
    <article className={style.cardContainer}>
      {newUploadList.map((item) => (
        <div key={item._id} className={style.uploadWrapper}>
          <div
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className={style.imgWrapper}
          >
            <div>
              <AiOutlinePlayCircle size={24} />
            </div>
          </div>
          <div className={style.details}>
            <h3>{item.title}</h3>
            <div className={style.detailsColumn}>
              <div className={style.beatDetails}>
                <p>Size:</p>
                <p>{item.size}</p>
                <p>Genre:</p>
                <p>{item.genre} </p>
                <p>Amount: </p>
                <p>{item.amount} </p>
                <p>Purchase: </p>
                <p>{item.purchase}</p>
              </div>
              <button className={style.button}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default UploadCard;
