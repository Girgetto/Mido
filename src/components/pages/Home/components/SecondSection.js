import React from 'react'
import style from './style.module.scss'
import { useTranslation } from 'react-i18next'

const SecondSection = () => {
  const [t] = useTranslation()
  return (
    <section className={style.secondSection}>
      <div className={style.titles}>
        <p className={style.paraph}>
          {t('home.Analysis')} | {t('home.Consultancy')} |{' '}
          {t('home.Coordination')}
        </p>
      </div>
      <p className={style.consultancy}>{t('home.ConsultancyMediation')}</p>
    </section>
  )
}

export default SecondSection
