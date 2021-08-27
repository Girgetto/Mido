import React from 'react'

import style from './style.module.scss'
import omidaReal from '../../../../assets/img/omida-real-estate-consulting.png'
import franco from '../../../../assets/img/franco.png'

const Main = () => {
  return (
    <section className={style.firstSection}>
      <div className={style.home}>
        <img
          src={franco}
          alt="omida"
          className="logo-header"
          id={style.omida}
        />
        <img
          src={omidaReal}
          alt="omida"
          className="logo-header"
          id={style.omida}
        />
      </div>
    </section>
  )
}

export default Main
