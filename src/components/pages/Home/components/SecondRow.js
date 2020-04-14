import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'
import view1 from '../../../../assets/img/view1.jpg'
import view2 from '../../../../assets/img/view2.jpg'
import cs from 'classnames'

const FirstSquares = () => {
  const [t] = useTranslation()
  return (
    <div
      className={styles.squares}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className={styles.square}>
        <img className={styles.image} src={view1} alt="view1" />
      </div>
      <div className={cs(styles.square, styles.wrapper)}>
        <h1>{t('home.ASpecializedGuide')}</h1>
        <p>{t('home.WeAnalyze')}</p>
      </div>
      <div className={styles.square}>
        <img className={styles.image} src={view2} alt="view2" />
      </div>
    </div>
  )
}

export default FirstSquares
