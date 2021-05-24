import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES, CLASS_NAME } from '../../../constants'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import cs from 'classnames'

import MobileNavbar from './components/MobileNavbar'
import { LANGUAGES } from './constant'
import omidaLogo from '../../../assets/img/omida-logo.png'

const Navbar = ({ className, setLanguage }) => {
  const [t] = useTranslation()
  const changeLanguage = (lng) => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
  }

  return (
    <div className={className}>
      <img
        width="280"
        height="231"
        src={omidaLogo}
        data-src={omidaLogo}
        className="attachment-large size-large lazyloaded logo"
        alt="omida-logo"
      ></img>
      <MobileNavbar setLanguage={setLanguage} />
      <ul className="list">
        <Link
          to={ROUTES.index}
          className={cs(
            window.location.href.split('#')[1] === ROUTES.index &&
              CLASS_NAME.SELECTED
          )}
        >
          {t('navbar.home', 'Home')}
        </Link>
        <Link
          to={ROUTES.aboutUs}
          className={cs(
            window.location.href.includes(ROUTES.aboutUs) && CLASS_NAME.SELECTED
          )}
        >
          {t('navbar.aboutUs', 'About Us')}
        </Link>
        <Link
          to={ROUTES.services}
          className={cs(
            window.location.href.includes(ROUTES.services) &&
              CLASS_NAME.SELECTED
          )}
        >
          {t('navbar.services', 'Services')}
        </Link>
      </ul>
      <div className="language">
        {LANGUAGES.map(({ language, value }) => (
          <span
            className={`language__${value}`}
            onClick={() => changeLanguage(value)}
            role="img"
            aria-label={language}
            key={language}
          >
            {language.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar
