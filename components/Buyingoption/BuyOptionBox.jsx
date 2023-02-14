import { OptionData } from './OptionData';
import styles from './buyingoption.module.scss';

function BuyOptionBox() {
  return OptionData.map((option) => (
    <div className={styles.radiobox} key={option.id}>
      <label htmlFor="buyoption">
        <input type="radio" name="radio" id="buyoption" />
        <div className={`${styles.radiobox__item} ${styles.box}`}>
          <h6>{option.name}</h6>
          <p>NGN {option.price}</p>
          <p>{option.format}</p>
        </div>
      </label>
    </div>
  ));
}

export default BuyOptionBox;
