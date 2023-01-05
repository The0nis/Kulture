import React from 'react';
import style from './savedItems.module.css';
import Page from '../Page';
import datas from './SavedLists';
import Image from 'next/image';
import deleteMe from '../../assets/deletebtn.png';

const SavedItems = () => {
  return (
    <Page>
      <div className={style.wrapper}>
      {datas.map((item, id) => {
        return (
          <main className={style.items_wrapper} key={id}>
            <div className={style.first_wrapper}>
              <div className={style.picture_wrapper}>
                <Image src={item.picture} className={style.item_picture} />
              </div>
              <div className={style.items_container}>
                <div className={style.item_content}>
                  <h5>
                    {item.name}
                    <span className={style.item_dot}><h6>.</h6></span>
                    <span className={style.item_lastseen}>
                      {' '}
                      <p>{item.lastseen}</p>
                    </span>
                  </h5>
                  <p>
                    by {item.producer}
                    <span className={style.change_color}> {item.profile}</span>
                  </p>
                  <p>Released on {item.released}</p>
                </div>

                <div className={style.item_footer}>
                  <div className={style.item_amount}>
                    <h4>NGN {item.amount}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_btn}>
              <div className={style.item_footersecond}>
                <div className={style.item_amount}>
                  <h4>NGN {item.amount}</h4>
                </div>
              </div>
              <div className={style.btn_wrap}>
                <div className={style.first_btn}>
                  <button className={style.delete_btn}>
                    Remove{' '}
                    <Image src={deleteMe} className={style.delete_icon} />
                  </button>
                </div>

                <div className={style.second_btn}>
                  <button className={style.buy_btn}>Buy Now</button>
                </div>
              </div>
            </div>
          </main>
        );
      })}
      </div>
    </Page>
  );
};

export default SavedItems;
