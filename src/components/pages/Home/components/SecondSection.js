import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player'

import style from './style.module.scss'

const SecondSection = () => {
  const [t] = useTranslation()
  return (
    <section className={style.secondSection}>
      <ReactPlayer
        width="956px"
        height="540px"
        url="https://www.youtube.com/watch?v=r4Hcrsdgz1Q"
        style={{ display: 'none' }}
      />
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
