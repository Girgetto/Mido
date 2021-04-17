import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES, CLASS_NAME } from '../../../constants'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import cs from 'classnames'
import MobileNavbar from './components/MobileNavbar'

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
        <span
          className="language__gb"
          onClick={() => changeLanguage('en')}
          role="img"
          aria-label="en"
        >
          EN
        </span>
        <span
          className="language__it"
          onClick={() => changeLanguage('it')}
          role="img"
          aria-label="it"
        >
          IT
        </span>
        <span
          className="language__es"
          onClick={() => changeLanguage('es')}
          role="img"
          aria-label="es"
        >
          ES
        </span>
        <span
          className="language__de"
          onClick={() => changeLanguage('de')}
          role="img"
          aria-label="de"
        >
          DE
        </span>
        <span
          className="language__fr"
          onClick={() => changeLanguage('fr')}
          role="img"
          aria-label="de"
        >
          FR
        </span>
        <span
          className="language__ru"
          onClick={() => changeLanguage('ru')}
          role="img"
          aria-label="ru"
        >
          RU
        </span>
        <span
          className="language__cn"
          onClick={() => changeLanguage('cn')}
          role="img"
          aria-label="cn"
        >
          中文
        </span>
      </div>
    </div>
  )
}

export default Navbar
