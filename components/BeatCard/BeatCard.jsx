import Image from 'next/image';
import style from './beatCard.module.css';
import miriam from '../../assets/miriam.svg';
import miriam2 from '../../assets/miriam2.svg';
import wintspread from '../../assets/wintspread.svg';
import wintspread2 from '../../assets/wintspread2.svg';
import videocircle from '../../assets/videocircle.svg';
import share from '../../assets/share.svg';
import save from '../../assets/save.svg';

function BeatCard() {
  return (
    <div className={style.containerbeatcard}>
      <div className={style.genre_header}>
        <div className={style.list_wrapper}>
          <ul className={style.genrebeat}>
            <li>
              <a href>All</a>{' '}
            </li>
            <li>
              <a href>Afro pop</a>{' '}
            </li>
            <li>
              {' '}
              <a href>R & B</a>{' '}
            </li>
            <li>
              {' '}
              <a href>world</a>{' '}
            </li>
          </ul>
        </div>

        {/* I used select instead of datalist  */}

        <div className={style.selectus}>
          <select name="" id="" placeholder="Filter">
            <option>Filter</option>
            <option>Afro pop</option>
            <option>Gospel</option>
            <option>Fuji</option>
            <option>Juju</option>
            <option>Hip hop</option>
            <option>Blues</option>
            <option>Reggae</option>
            <option>Apala</option>
          </select>
        </div>
      </div>

      <div className={style.containerbeatcard1}>
        <div className={style.card_header}>
          <div>
            <Image src={miriam} alt="image" className={style.imagebeatcard} />
          </div>
          <div>
            <h4> Miriam </h4>
          </div>
          <div>
            <h4>@ohuly </h4>
          </div>
          <div className={style.make_circle}></div>
          <div>
            <h4> 2 Hours Ago</h4>
          </div>
        </div>

        <div className={style.imageovertext}>
          <Image src={wintspread} alt="Snow" />

          <div className={style.iconwrapper}>
            <div className={style.iconovertext}>
              <Image src={videocircle} alt="videocircle" />
            </div>

            <div className={style.bottomleft}>Wintspread</div>
          </div>
        </div>

        <p className={style.released}>
          released on the 23 November 2022 <br></br> beat by Mariam @ohuly
        </p>

        <div className={style.footerwrapper}>
          <p className={style.footerwrappertext}>NGN 90,0000 </p>{' '}
          <button className={style.btn_footer} type="submit">
            BUY NOW
          </button>
        </div>

        <div className={style.downicons}>
          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={share} alt="image" className={style.foot} />
            </div>

            <div className={style.footertext1}>
              <p>share</p>
            </div>
          </div>

          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={save} alt="image" className={style.foot} />
            </div>
            <div className={style.footertext1}>
              <p>save for later</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second phase */}

      <div className={style.containerbeatcard1}>
        <div className={style.card_header}>
          <div>
            <Image src={miriam2} alt="image" className={style.imagebeatcard} />
          </div>
          <div>
            <h4> Miriam </h4>
          </div>
          <div>
            <h4>@ohuly </h4>
          </div>
          <div className={style.make_circle}></div>
          <div>
            <h4> 2 Hours Ago</h4>
          </div>
        </div>

        <div className={style.imageovertext}>
          <Image src={wintspread2} alt="Snow" />

          <div className={style.iconwrapper}>
            <div className={style.iconovertext}>
              <Image src={videocircle} alt="videocircle" />
            </div>

            <div className={style.bottomleft}>Wintspread</div>
          </div>
        </div>

        <p className={style.released}>
          released on the 23 November 2022 <br></br> beat by Mariam @ohuly
        </p>

        <div className={style.footerwrapper}>
          <p className={style.footerwrappertext}>NGN 90,0000 </p>{' '}
          <button className={style.btn_footer} type="submit">
            BUY NOW
          </button>
        </div>

        <div className={style.downicons}>
          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={share} alt="image" className={style.foot} />
            </div>

            <div className={style.footertext1}>
              <p>share</p>
            </div>
          </div>

          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={save} alt="image" className={style.foot} />
            </div>
            <div className={style.footertext1}>
              <p>save for later</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={style.loadmore}>
      <p>load more...</p> 
        </div> */}
    </div>
  );
}

export default BeatCard;
