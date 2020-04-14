import React from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '../../layout'

const Services = ({ className }) => {
  const [t] = useTranslation()
  return (
    <div className={className}>
      <SEO title="Remida | Services">
        <h1>{t('services.Intro')}</h1>
        <p>{t('services.IntroText')}</p>
        <div className="titles">
          <h2>
            {t('services.LuxuryRealEstate')} | {t('services.BusinessAdvisory')}{' '}
            |{t('services.TechnicalAdvice')} | {t('services.Refurbishment')} |
            {t('services.BusinessMaximization')} | {t('services.Management')} |
            {t('services.Coordination')} | {t('services.AfterSales')} |
            {t('services.Planning')}
          </h2>
        </div>
        <p>{t('services.TheTarget')}</p>
        <p>{t('services.ADeep')}</p>
        <p>{t('services.WeWill')}</p>
        <p>{t('services.WeCoordinate')}</p>
      </SEO>
    </div>
  )
}

export default Services
