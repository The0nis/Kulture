import React, { useState } from "react";
import Image from "next/image";
import styles from "./cartreview.module.scss";
import playbtn from "../../assets/videocircle.svg";
import items from "../DummyLists/cartCardList";
import deleteMe from "../../assets/deletebtn.png";

function CartReviewContent() {
  const [savedLists, setSavedLists] = useState(items); // create a state variable and set it to the `datas` array
  const [datas, setDatas] = useState(items); // create a state variable to store the original list of items
  const [currentPage, setCurrentPage] = useState(1); // state variable to store the current page number

  const removeItem = (index) => {
    // create a new array with only the items that you want to keep
    const updatedSavedLists = savedLists.filter((item, i) => i !== index);
    // update the savedLists state variable with the new array
    setSavedLists(updatedSavedLists);
    setDatas(updatedSavedLists); // update the datas array with the new array
  };

  console.log(items);
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__header}>
        <div className={styles.reviews__items}>
          <p>Items</p>
        </div>

        <div className={styles.reviews__price}>
          <p>Price</p>
        </div>
      </div>
      {items.map((item, id) => {
        let { picture, name, amount, genre, license, type } = item;
        return (
          <div className={styles.review} key={id}>
            <div className={styles.review__imaged}>
              <Image
                src={picture}
                alt="cover"
                className={styles.review__picture}
              />
              <Image
                src={playbtn}
                alt="play btn"
                className={styles.review__playBtn}
              />
            </div>
            <div className={styles.review__details}>
              <div className={styles.review__name}>
                <p>{name}</p>
              </div>
              <div className={styles.review__amount}>
                <h5>NGN {amount}</h5>
              </div>
              <div className={styles.review__audio}>
                <p>{genre}</p>
                <h2 className={styles.review__midDot}>.</h2>
                <p>
                  {license} License ({type})
                </p>
              </div>
              <div className={styles.review__Btn}>
                <div className={styles.review__firstBn}>
                  {/* write a function for the button that will remove only the specific items from the object */}
                  <button
                    className={styles.review__deleteBtn}
                    onClick={() => removeItem(id)}
                  >
                    <span>
                      <Image
                        src={deleteMe}
                        className={styles.reveiw__deleteIcon}
                      />
                    </span>
                    <span> Remove</span>
                  </button>
                </div>
                <div className={styles.review__priceBtn}>
                  <button type="submit">Review license</button>
                </div>
              </div>
            </div>
            <div className={styles.review__pricetag}>
              <h5>NGN {amount}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartReviewContent;
