import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { SEO } from '../../layout'
import key from '../../../assets/img/key.png'
import { ROUTES } from '../../../constants'

const AboutUs = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      <SEO title="Omida - Real Estate Consulting - Italy | About Us" />
      <div className="header">
        <div id="overlay"></div>
        <p>
          Each human being lives three lives: the public, the private and the
          secret one. The last one is dedicated to manage important business.
        </p>
      </div>
      <div className="content">
        <img src={key} alt="key" />
        <div className="main-content">
          <h2>{t('about.EachHuman', 'EachHuman')}</h2>
          <main>
            <h2>{t('about.35Years', '35Years')}</h2>
            <p>{t('about.Remida', 'Omida')}</p>
            <Link to={ROUTES.services}>
              <div className="button">
                <div className="overLayer">GO</div>
                {t('about.LearnMore', 'LearnMore')}
              </div>
            </Link>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
