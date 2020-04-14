import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'
import view3 from '../../../../assets/img/view3.jpg'
import cs from 'classnames'

const FirstSquares = () => {
  const [t] = useTranslation()
  return (
    <div
      className={styles.squares}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className={cs(styles.square, styles.wrapper)}>
        <h1>{t('home.PrivacyAndDiscretion')}</h1>
        <p>{t('home.OurApproach')}</p>
      </div>
      <div className={styles.square}>
        <img className={styles.image} src={view3} alt="view3" />
      </div>
      <div className={cs(styles.square, styles.wrapper)}>
        <h1>{t('home.LuxuryRealEstate')}</h1>
        <p>{t('home.WithAGrowing')}</p>
      </div>
    </div>
  )
}

export default FirstSquares
