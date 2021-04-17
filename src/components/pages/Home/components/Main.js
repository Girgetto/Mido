import React from 'react'

import style from './style.module.scss'
import omidaLogo from '../../../../assets/img/omida-logo.png'
import omidaReal from '../../../../assets/img/omida-real-estate-consulting.png'

const Main = () => {
  return (
    <section className={style.firstSection}>
      <div className={style.home}>
        <img
          src={omidaLogo}
          alt="logo"
          className="logo-header"
          id={style.logo}
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
