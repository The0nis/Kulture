import style from './sales.module.scss';
import Image from 'next/image';
import eyeslash from '../../assets/eyeslash.svg';

function Sales() {
  return (
    <div>
      <div className={style.saleswrapper}>
        <div className={style.salestextwrap}>
          {/* div code for heading and the unseen image code */}
          <div className={style.sales_image}>
            <div className={style.salestext1}>
              <h4>Sales</h4>
            </div>
            <div className={style.eyeslash_image}>
              <Image src={eyeslash} alt="eyeslash" />
            </div>
          </div>

          <div className={style.salestext2}>
            <p>Total Amount</p>
          </div>
          <div className={style.salestext3}>
            <h4>NGN 90,000</h4>
          </div>
          <div className={style.salestext4}>
            <p>Total sales</p>
          </div>
          <div className={style.salestext5}>
            <h4>90</h4>
          </div>

          {/* button codes */}
          <div className={style.overallsalesbtn}>
            <div className={style.salesbtn}>
              <button type="button" className={style.salesbtn1}>
                Withdraw
              </button>
            </div>

            <div className={style.salesbtn}>
              <button type="button" className={style.salesbtn2}>
                Add Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
