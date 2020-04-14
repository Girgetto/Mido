import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './style.module.scss'

const Main = () => {
  const [t] = useTranslation()
  return (
    <section className={style.firstSection}>
      <div className={style.mainTitle}>
        <h1 data-aos="fade-right" data-aos-duration="1000">
          {t('title')}
        </h1>
        <p data-aos="fade-left" data-aos-duration="1000">
          {t('home.RealEstate')}
        </p>
      </div>
    </section>
  )
}

export default Main
