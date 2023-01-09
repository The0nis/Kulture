import React from 'react'
import style from './checkout.module.scss';
import Image from 'next/image';
import smalltickcircle from '../../assets/smalltickcircle.svg';


function CheckOut() {
  return (
    <div>
            <div className={style.checkout_container}>



        <div className={style.addaccountdiv}>
          <input
            className={style.addaccountnumber}
            type="Number"
            placeholder=" Account Number "
          ></input>
        </div>



              </div>



    </div>
  )
}

export default CheckOut