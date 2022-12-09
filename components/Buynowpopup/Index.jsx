import style from './buynowpopup.module.scss';
// eslint-disable-next-line import/order
import { CgCloseO } from 'react-icons/cg';

function Buynowpopup() {
  return (
    <div>
      <div className={style.containerbuynow}>
        <div className={style.headerbuy}>
          <div className={style.selectlicense}>
            <h4>Select License</h4>
          </div>
          <div className={style.closebutton}>
            <CgCloseO size={20} />
          </div>
        </div>

        <div className={style.gridlayout}>
          <div className={style.gridbuynow}>
            <div className={style.wrappertextbuy}>
              <article className={style.text1}>
                <p>Basic WAV LEASE</p>
              </article>
              <article className={style.text2}>
                <p>NGN 15,000</p>
              </article>
              <article className={style.text3}>
                <p>MP3 AND WAV</p>
              </article>
            </div>
          </div>

          <div className={style.gridbuynow}>
            <div className={style.wrappertextbuy}>
              <article className={style.text1}>
                <p>Basic WAV LEASE</p>
              </article>
              <article className={style.text2}>
                <p>NGN 15,000</p>
              </article>
              <article className={style.text3}>
                <p>MP3 AND WAV</p>
              </article>
            </div>
          </div>
        </div>

        <div className={style.gridlayout1}>
          <div className={style.gridbuynow}>
            <div className={style.wrappertextbuy}>
              <article className={style.text1}>
                <p>Basic WAV LEASE</p>
              </article>
              <article className={style.text2}>
                <p>NGN 15,000</p>
              </article>
              <article className={style.text3}>
                <p>MP3 AND WAV</p>
              </article>
            </div>
          </div>

          <div className={style.gridbuynow}>
            <div className={style.wrappertextbuy}>
              <article className={style.text1}>
                <p>Basic WAV LEASE</p>
              </article>
              <article className={style.text2}>
                <p>NGN 15,000</p>
              </article>
              <article className={style.text3}>
                <p>MP3 AND WAV</p>
              </article>
            </div>
          </div>
        </div>

        <div className={style.gridbuynow1}>
          <div className={style.wrappertextbuy}>
            <article className={style.text1}>
              <p>Basic WAV LEASE</p>
            </article>
            <article className={style.text2}>
              <p>NGN 15,000</p>
            </article>
            <article className={style.text3}>
              <p>MP3 AND WAV</p>
            </article>
          </div>
        </div>

        <div className={style.terms}>
          <p>Terms of Usage</p>
        </div>

        <div className={style.total}>
          <p>Total:</p>
        </div>

        <div className={style.footer_text}>
          <div className={style.footer_text1}>
            <p>NGN 1,000,000</p>
          </div>
          <div className={style.footerbtn1}>
            <button type="button" className={style.footerbtn}>
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buynowpopup;
