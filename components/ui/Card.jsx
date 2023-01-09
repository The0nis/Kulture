import React from "react";
import style from "./Card.module.scss";

const Card = (props) => {
  return <div className={style.cardContainer}>{props.children}</div>;
};

export default Card;
