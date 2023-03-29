import style from "./popularproducer.module.scss";
import Link from "next/link";
import Image from "next/image";
import producer1 from "../../assets/producer1.svg";
import producer2 from "../../assets/producer2.svg";
import producer3 from "../../assets/producer3.svg";
import producer4 from "../../assets/producer4.svg";

function PopularProducer() {
  return (
    <div>
      <div className={style.producer_container}>
        <div className={style.producer_div}>
          <p className={style.producer_text}>Popular Producers </p>
        </div>

        {/* First Producer */}

        <div className={style.producer_wrapper}>
          <div className={style.cloud_image}>
            <Image src={producer1} alt='producer1' />
          </div>

          <div className={style.producertext}>
            <div>
              <p className={style.producer1_text1}>
                <Link href='/profile'>Mariam</Link>
              </p>
            </div>

            <div>
              <p className={style.producer1_text2}>
                <Link href='/profile'>@odizee</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Second Producer */}

        <div className={style.producer_wrapper}>
          <div className={style.cloud_image}>
            <Image src={producer2} alt='producer1' />
          </div>

          <div className={style.producertext}>
            <div>
              <p className={style.producer1_text1}>Mariam</p>
            </div>

            <div>
              <p className={style.producer1_text2}>@odizee</p>
            </div>
          </div>
        </div>

        {/* Third Producer */}

        <div className={style.producer_wrapper}>
          <div className={style.cloud_image}>
            <Image src={producer3} alt='producer1' />
          </div>

          <div className={style.producertext}>
            <div>
              <p className={style.producer1_text1}>Mariam</p>
            </div>

            <div>
              <p className={style.producer1_text2}>@odizee</p>
            </div>
          </div>
        </div>

        {/* Fourth Producer */}

        <div className={style.producer_wrapper}>
          <div className={style.cloud_image}>
            <Image src={producer4} alt='producer1' />
          </div>

          <div className={style.producertext}>
            <div>
              <p className={style.producer1_text1}>Mariam</p>
            </div>

            <div>
              <p className={style.producer1_text2}>@odizee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProducer;
