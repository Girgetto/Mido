import React from 'react'
import { useTranslation } from 'react-i18next'

import accordoDiSegnalazione from '../../../assets/contracts/accordo_di_segnalazione.docx'
import accordoMediatoriEn from '../../../assets/contracts/accordo_mediatori_en.doc'
import accordoMediatori from '../../../assets/contracts/accordo_mediatori.doc'
import consenso from '../../../assets/contracts/consenso_al_trattamento_dei_dati.pdf'
import contrattoSegnalatore from '../../../assets/contracts/contratto_segnalatore.docx'
import guidaPerAcquisto from '../../../assets/contracts/guida_per_acquisto_in_italia.pdf'
import service1 from '../../../assets/img/services1.jpg'
import service2 from '../../../assets/img/services2.jpg'
import service3 from '../../../assets/img/services3.jpg'
import service4 from '../../../assets/img/services4.jpg'
import service5 from '../../../assets/img/Experience1.jpg'
import service6 from '../../../assets/img/Experience2.jpg'
import useOnScrollTop from '../../../hooks/useOnScrollTop'

import { SEO } from '../../layout'

const contracts = [
  { href: accordoDiSegnalazione, name: 'Accordo di segnalazione' },
  { href: accordoMediatori, name: 'Accordo mediatori' },
  { href: accordoMediatoriEn, name: 'Accordo mediatori EN' },
  { href: consenso, name: 'Consenso al trattamento dei dati' },
  { href: contrattoSegnalatore, name: 'Contratto Segnalatore' },
  { href: guidaPerAcquisto, name: 'Guida per acquisto' },
]

const Services = ({ className }) => {
  const [t] = useTranslation()
  useOnScrollTop()

  return (
    <div className={className}>
      <SEO title="Omida - Real Estate Consulting - Italy | Services" />
      <div className="header">
        <div id="overlay"></div>
        <p>
          Each human being lives three lives: the public, the private and the
          secret one. The last one is dedicated to manage important business.
        </p>
      </div>
      <div className="content">
        <div className="lists">
          <ul>
            <li>{t('services.LuxuryRealEstate').toUpperCase()}</li>
            <li>{t('services.BusinessAdvisory').toUpperCase()}</li>
            <li>{t('services.TechnicalAdvice').toUpperCase()}</li>
          </ul>
          <ul>
            <li>{t('services.Refurbishment').toUpperCase()}</li>
            <li>{t('services.BusinessMaximization').toUpperCase()}</li>
            <li>{t('services.Management').toUpperCase()}</li>
          </ul>
          <ul>
            <li>{t('services.Coordination').toUpperCase()}</li>
            <li>{t('services.AfterSales').toUpperCase()}</li>
            <li>{t('services.Planning').toUpperCase()}</li>
          </ul>
        </div>
        <div className="flex">
          <h1>01</h1>
          <img alt="service-1" src={service1}></img>
          <p>{t('services.TheTarget')}</p>
        </div>
        <div className="flex">
          <h1>02</h1>
          <img alt="service-2" src={service2}></img>
          <p>{t('services.ADeep')}</p>
        </div>
        <div className="flex">
          <h1>03</h1>
          <img alt="service-3" src={service3}></img>
          <p>{t('services.WeWill')}</p>
        </div>
        <div className="flex">
          <h1>04</h1>
          <img alt="service-4" src={service4}></img>
          <p>{t('services.WeCoordinate')}</p>
        </div>
        <div className="flex">
          <h1>05</h1>
          <img alt="service-1" src={service5}></img>
          <p>{t('services.Documentation')}</p>
        </div>
        <div className="flex">
          <h1>06</h1>
          <img alt="service-1" src={service6}></img>
          <p>{t('services.WeManage')}</p>
        </div>
        <h2 style={{ marginLeft: '10% ' }}>{t('Our Contracts')}</h2>
        <ul className="links">
          {contracts.map(({ href, name }, index) => (
            <li key={index}>
              <a href={href} download>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
