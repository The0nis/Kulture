import style from './addaccount.module.scss';
import Image from 'next/image';
import selectbank from '../../assets/selectbank.svg'

function addaccount() {
  return (
    <div className={style.addaccount_container}>
      <div className={style.addaccountdiv}>
        <label>Account Number</label>
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


        {/* <div className={style.addaccountdiv1}>
          <input
            className={style.addaccountnumber1}
            type=""
            placeholder=" Select Bank "
          ></input>
           <div className={style.selectbankimage}>
         <Image src={selectbank}></Image>
        </div>
        </div> */}
     
       
       
  

      <div>
        <div className={style.addaccountdiv2}>
          <input
            className={style.addaccountnumber2}
            type="text"
            placeholder=" Account Name"
          ></input>
        </div>
      </div>


    </div>
  );
}

export default addaccount;
