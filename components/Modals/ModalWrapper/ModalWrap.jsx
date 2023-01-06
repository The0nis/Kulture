import React from 'react'
import style from './ModalWrap.module.css'

const ModalWrap = (props) => {
  return (
    <div className={style.wrapper}>
        {props.children}
    </div>
  )
}

export default ModalWrap