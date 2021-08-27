import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import styled from './style.module.scss'
import { ROUTES } from '../../../../constants'

const OurMission = () => {
  const [t] = useTranslation()
  return (
    <div
      className={styled.ourMission}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className={styled.column_2}>
        <div style={{ position: 'relative' }}>
          <h2 className={styled.ourMissionText}>{t('home.OurMission')}</h2>
        </div>
        <div>
          <p>{t('home.WeOffer')}</p>
          <Link to={ROUTES.services}>
            <button className={styled.button}>
              <div className={styled.overLayer}>GO</div>
              {t('LEARN MORE ABOUT US')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurMission
