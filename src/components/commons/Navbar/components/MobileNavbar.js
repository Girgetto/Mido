import React, { useState } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants'
import { useTranslation } from 'react-i18next'
import cs from 'classnames'
import i18n from 'i18next'

const MobileNavbar = ({ setLanguage }) => {
  const [isBlock, setIsBlock] = useState(false)
  const [t] = useTranslation()

  const changeLanguage = (lng) => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
  }

  const LINKS = [
    { name: t('navbar.home', 'Home'), route: ROUTES.index },
    { name: t('navbar.aboutUs', 'About Us'), route: ROUTES.aboutUs },
    { name: t('navbar.services', 'Services'), route: ROUTES.services },
    { name: t('navbar.contacts', 'Contacts'), route: ROUTES.contacts },
  ]

  const LANGUAGES = [
    { language: 'en', style: 'gb' },
    { language: 'it', style: 'it' },
    { language: 'es', style: 'es' },
    { language: 'de', style: 'de' },
    { language: 'fr', style: 'fr' },
    { language: 'ru', style: 'ru' },
    { language: '中文', style: 'cn' },
  ]

  return (
    <div className={style.mobileNavbar}>
      <div className={style.topnav}>
        <span className="icon" onClick={() => setIsBlock(!isBlock)}>
          <i className={cs('fa fa-bars', style.faIcon, style.bars)}></i>
        </span>
        <div
          id={style.myLinks}
          style={!isBlock ? { display: 'none' } : { display: 'block' }}
        >
          <span className="icon" onClick={() => setIsBlock(!isBlock)}>
            <i className={cs('fa fa-times', style.faIcon)}></i>
          </span>
          {LINKS.map(({ name, route }) => (
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
