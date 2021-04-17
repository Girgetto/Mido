import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES, CLASS_NAME } from '../../../constants'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import cs from 'classnames'

import MobileNavbar from './components/MobileNavbar'
import { LANGUAGES } from './constant'

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
        src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_280,h_231/https://www.omidaconsulting.com/wp-content/uploads/2020/06/omida-logo.png"
        data-src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_280,h_231/https://www.omidaconsulting.com/wp-content/uploads/2020/06/omida-logo.png"
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
  )
}

export default Navbar
