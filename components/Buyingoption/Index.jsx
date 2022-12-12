import style from './buyingoption.module.scss';

function Buyingoption() {
  return (
    <div>
      <div className={style.wrapperbuyingoptiontext}>
        <p>Buying Options</p>
      </div>

      <div className={style.wrapper_box}>
        <button className={style.button_option}></button>
        <div className={style.wrapper_buyingoptiontext1}>
          <div className={style.wrapper_buyingoptiontext2}>
            <p>
              Standard Licenses - <b>NGN20,000.00</b>
            </p>
          </div>
        </div>
      </div>

      <div className={style.wrapper_box}>
        <button className={style.button_option}></button>
        <div className={style.wrapper_buyingoptiontext1}>
          <div className={style.wrapper_buyingoptiontext2}>
            <p>
              Premium Licenses - <b>NGN70,000.00</b>
            </p>
          </div>
        </div>
      </div>

      <div className={style.wrapper_box}>
        <button className={style.button_option}></button>
        <div className={style.wrapper_buyingoptiontext1}>
          <div className={style.wrapper_buyingoptiontext2}>
            <p>
              Exclusive Licenses - <b>NGN150,000.00</b>
            </p>
          </div>
        </div>
      </div>

      <button className={style.buttonshopping}>Continue Shopping</button>

      <div className={style.emmy}>
        <button className={style.buttonshopping_1}>
          View cart and check out
        </button>
      </div>
    </div>
  );
}

export default Buyingoption;
