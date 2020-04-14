import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'react-router-dom/Link'
import { SEO } from '../../layout'

const AboutUs = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      <SEO title="Remida | About Us">
        <h2>{t('about.EachHuman', 'EachHuman')}</h2>
        <main>
          <h2>{t('about.35Years', '35Years')}</h2>
          <p>{t('about.Remida', 'Remida')}</p>
          <Link to={'/'}>{t('about.LearnMore', 'LearnMore')}</Link>
        </main>
      </SEO>
    </div>
  )
}

export default AboutUs
