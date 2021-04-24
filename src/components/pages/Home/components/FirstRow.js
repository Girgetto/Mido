import React from 'react'
import { useTranslation } from 'react-i18next'
import cs from 'classnames'

import styles from './style.module.scss'
import castle from '../../../../assets/img/castle.jpg'

const FirstSquares = () => {
  const [t] = useTranslation()
  return (
    <div
      className={styles.squares}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div className={cs(styles.square, styles.wrapper, styles.text)}>
        <h2>{t('home.TheExperience')}</h2>
        <p>{t('home.TheKnowledge')}</p>
      </div>
      <div className={styles.square}>
        <img className={styles.image} src={castle} alt="castle" />
      </div>
      <div className={cs(styles.square, styles.wrapper, styles.text)}>
        <h2>{t('home.WhenBeing')}</h2>
        <p>{t('home.InThree')}</p>
      </div>
    </div>
  )
}

export default FirstSquares
