import style from './addaccount.module.scss';
import Image from 'next/image';
import selectbank from '../../assets/selectbank.svg';
import Page from '../Page';

function addaccount() {
  return (
    <Page type="account">
      <div className={style.addaccount_container}>
        <div className={style.addaccountwrapper}>
        <div className={style.addaccountdiv}>
          <input
            className={style.addaccountnumber}
            type="Number"
            placeholder=" Account Number "
          ></input>
        </div>

        <div className={style.selectus}>
          <select name="" id="" placeholder="Select Bank">
            <option>Select Bank</option>
            <option>Access Bank</option>
            <option>Guaranty Trust Bank </option>
            <option>Fidelity</option>
            <option>First City Momemtum</option>
            <option>Access (Diamond) Bank</option>
            <option>Wema Bank</option>
            <option>United Bank of Africa (UBA)</option>
            <option>Zenith</option>
            <option>Sterling Bank</option>
            <option>Keystone</option>
            <option>Polaris Bank</option>
          </select>
        </div>

        <div>
          <div className={style.addaccountdiv2}>
            <input
              className={style.addaccountname}
              type="text"
              placeholder=" Account Name"
            ></input>
          </div>
        </div>
        </div>
      </div>
    </Page>
  );
}

export default addaccount;
