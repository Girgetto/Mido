import React, { useState } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import cs from 'classnames'
import i18n from 'i18next'

import { ROUTES } from '../../../../constants'
import { LINKS, LANGUAGES } from '../constant'

const MobileNavbar = ({ setLanguage }) => {
  const [isBlock, setIsBlock] = useState(false)
  const [t] = useTranslation()

  const changeLanguage = (lng) => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
  }

  return (
    <div className={style.mobileNavbar}>
      <div className={style.topnav}>
        <span className="icon" onClick={() => setIsBlock(!isBlock)}>
          <i className={cs('fa fa-bars', style.faIcon, style.bars)}></i>
        </span>
        <div
          id={style.myLinks}
          style={isBlock ? { left: '0' } : { left: '-100vw' }}
        >
          <span className="icon" onClick={() => setIsBlock(!isBlock)}>
            <i className={cs('fa fa-times', style.faIcon)}></i>
          </span>
          {LINKS(t, ROUTES).map(({ name, route }) => (
            <Link className={style.link} to={route} key={name}>
              {name}
            </Link>
          ))}
          <div className={style.language}>
            {LANGUAGES.map(({ language, style }) => (
              <span
                className={`language__${style}`}
                onClick={() => changeLanguage(language)}
                role="img"
                aria-label={language}
                key={language}
              >
                {language.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
