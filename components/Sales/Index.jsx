import style from './sales.module.scss';

function Sales() {
  return (
    <div>
      <div className={style.saleswrapper}>
        <div className={style.salestextwrap}>
          <div className={style.salestext1}>
            <h4>Sales</h4>
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
          <div className={style.salesbtn}>
            <button type="button" className={style.salesbtn1}>
              WITHDRAWN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
