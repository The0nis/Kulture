import Image from "next/image";
import Link from "next/link";
import style from "./beatCard.module.scss";
import { cardList } from "../Utils/Index";


function BeatCard() {
  return (
    <div className={style.containerbeatcard}>
      <div className={style.genre_header}>
        <div className={style.list_wrapper}>
          <Link href="#/">All</Link>
          <Link href="#/">Afro pop</Link>
          <Link href="#/">R&B</Link>
          <Link href="#/">world</Link>
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
      </div>
      <div className={style.wrap}>
        {/* First Card....Notes its hard coded */}
        {/* Will create a dummy list and map through later */}
        
        {
          cardList.map((card, indx) => (

          <div className={style.containerbeatcard1}  key={indx}>
          <div className={style.card_header}>
            <div>
              <Image src={card.personimg} alt="image" className={style.imagebeatcard} />
            </div>
            <h3> {card.name} </h3>
            <p>@{card.tag} </p>
            <div className={style.make_circle}></div>
            <p> {card.time} Ago</p>
          </div>

          <div className={style.card_wrap}>
            <div className={style.wrap_image}>
              <div className={style.image_snow}>
                <Image src={card.cardimg} alt="Snow" className={style.snow} />
              </div>
              <div className={style.hideme}>
                <Image src={card.cardplay} alt="videocircle" />
              </div>
            </div>
            <div className={style.producer_content}>
              <div className={style.producer_label}>
                <div className={style.hidenow}>
                  <Image src={card.cardplay} alt="videocircle" />
                </div>{" "}
                <div>
                  <h4>{card.cardname}</h4>
                </div>
              </div>
              <div className={style.beat_text}>
                <p>
                  Beat by {card.name} @{card.tag}
                  <br />
                  released on {card.released}
                </p>
              </div>

              <div className={style.footerwrapper}>
                <p className={style.footerwrappertext}>{card.amount} </p>{" "}
                <button className={style.btn_footer} type="submit">
                  <Link href="/review">BUY NOW</Link>
                </button>
              </div>
            </div>
          </div>

          <div className={style.downicons}>
            <div className={style.footericontext1}>
              <div className={style.footericon1}>
                <Image src={card.shares} alt="image" className={style.foot} />
              </div>

              <div className={style.footertext1}>
                <p>share</p>
              </div>
            </div>

            <div className={style.footericontext1}>
              <div className={style.footericon1}>
                <Image src={card.saves} alt="image" className={style.foot} />
              </div>
              <div className={style.footertext1}>
                <p>save for later</p>
              </div>
            </div>
          </div>
        </div>
          ))
        }
      </div>

      {/* <div className={style.loadmore}>
      <p>load more...</p> 
        </div> */}
    </div>
  );
}

export default BeatCard;