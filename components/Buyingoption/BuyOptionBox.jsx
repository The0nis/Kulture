import { OptionData } from './OptionData';
import styles from './buyingoption.module.scss';

function BuyOptionBox() {
  return OptionData.map((option) => (
    <div className={styles.radiobox}>
      <label htmlFor="buyoption">
        <input type="radio" name="radio" checked id="buyoption" />
        <div className={`${styles.radiobox__item} ${styles.box}`}>
          <h3>{option.name}</h3>
          <h4>NGN {option.price}</h4>
          <p>{option.format}</p>
        </div>
      </label>
    </div>
  ));
}

export default BuyOptionBox;
