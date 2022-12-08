import style from './buynowpopup.module.scss';
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
                <CgCloseO size={20} color="fff" />
                </div>

          </div>


        </div>





    </div>




  )
}

export default Buynowpopup