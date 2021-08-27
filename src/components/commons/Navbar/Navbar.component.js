import React, { useRef } from 'react'
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
  const navbar = useRef(null)

  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = '0'
    } else {
      navbar.current.style.top = '-120px'
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <div className={className} ref={navbar}>
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
