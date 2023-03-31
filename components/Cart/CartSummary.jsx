import style from "./CartSummary.module.scss";
import ButtonLink from "../Button";
import Button from "../Button";
import ButtonOutline from "../Button/ButtonOutline";
import Link from "next/link";

function CartSummary() {
  return (
    <div>
      {/* The overall container */}
      <div className={style.summarywrap}>
        <div className={style.header}>
          <h2>Cart summary</h2>
        </div>
        <div className={style.numberwrapper}>
          <div className={style.summarytext2}>
            <p>Total Gross</p>
          </div>
          <div className={style.summarytext3}>
            <p>NGN50,000</p>
          </div>
        </div>

        <div className={style.numberwrapper1}>
          <div className={style.summarytext2}>
            <p>Discount</p>
          </div>
          <div className={style.summarytext3}>
            <p>NGN0.0</p>
          </div>
        </div>

        <div className={style.numberwrapper2}>
          <div className={style.summarytext2}>
            <p>Discount</p>
          </div>
          <div className={style.summarytext3}>
            <p>NGN0.0</p>
          </div>
        </div>

        <div className={style.summarytextwrapper}>
          <div className={style.detail}>
            <span className={style.summarytext7}>
              you are checking out as @andybanny, <br />
              not you?{" "}
            </span>{" "}
            <span className={style.summarytext8}>
              <a href='#/'>Logout</a>
            </span>
          </div>
          {/* The starting of the button div */}
          <div className={style.btncheckout}>
            <Button page='checkout'>CHECKOUT</Button>
          </div>
          <div>
            <button type='button' className={style.continueBtn}>
              <Link href='/'>Continue Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
