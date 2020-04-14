import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'
import castle from '../../../../assets/img/castle.jpg'
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
        <h1>{t('home.TheExperience')}</h1>
        <p>{t('home.TheKnowledge')}</p>
      </div>
      <div className={styles.square}>
        <img className={styles.image} src={castle} alt="castle" />
      </div>
      <div className={cs(styles.square, styles.wrapper)}>
        <h1>{t('home.WhenBeing')}</h1>
        <p>{t('home.InThree')}</p>
      </div>
    </div>
  )
}

export default FirstSquares
