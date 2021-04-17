import React from 'react'
import { useTranslation } from 'react-i18next'
import accordoDiSegnalazione from '../../../../src/assets/contracts/accordo_di_segnalazione.docx'
import accordoMediatoriEn from '../../../../src/assets/contracts/accordo_mediatori_en.doc'
import accordoMediatori from '../../../../src/assets/contracts/accordo_mediatori.doc'
import consenso from '../../../../src/assets/contracts/consenso_al_trattamento_dei_dati.pdf'
import contrattoSegnalatore from '../../../../src/assets/contracts/contratto_segnalatore.docx'
import guidaPerAcquisto from '../../../../src/assets/contracts/guida_per_acquisto_in_italia.pdf'

import { SEO } from '../../layout'

const Services = ({ className }) => {
  const [t] = useTranslation()
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
          <img
            alt="service-1"
            src="https://www.omidaconsulting.com/wp-content/uploads/2020/06/6.jpg"
          ></img>
          <p>{t('services.TheTarget')}</p>
        </div>
        <div className="flex">
          <h1>02</h1>
          <img
            alt="service-1"
            src="https://www.omidaconsulting.com/wp-content/uploads/2020/06/4.jpg"
          ></img>
          <p>{t('services.ADeep')}</p>
        </div>
        <div className="flex">
          <h1>03</h1>
          <img
            alt="service-1"
            src="https://www.omidaconsulting.com/wp-content/uploads/2020/06/1.jpg"
          ></img>
          <p>{t('services.WeWill')}</p>
        </div>
        <div className="flex">
          <h1>04</h1>
          <img
            alt="service-1"
            src="https://www.omidaconsulting.com/wp-content/uploads/2020/06/2.jpg"
          ></img>
          <p>{t('services.WeCoordinate')}</p>
        </div>
        <div className="flex">
          <h1>05</h1>
          <img
            alt="service-1"
            src="https://www.omidaconsulting.com/wp-content/uploads/2020/06/7.jpg"
          ></img>
          <p>{t('services.Documentation')}</p>
        </div>
        <div className="flex">
          <h1>06</h1>
          <img
            alt="service-1"
            src="https://www.omidaconsulting.com/wp-content/uploads/2020/06/5.jpg"
          ></img>
          <p>{t('services.WeManage')}</p>
        </div>
        <h2>{t('Our Contracts')}</h2>
        <ul className="links">
          <a href={accordoDiSegnalazione} download>
            Accordo di segnalazione
          </a>
          <a href={accordoMediatori} download>
            Accordo mediatori
          </a>
          <a href={accordoMediatoriEn} download>
            Accordo mediatori EN
          </a>
          <a href={consenso} download>
            Consenso al trattamento dei dati
          </a>
          <a href={contrattoSegnalatore} download>
            Contratto Segnalatore
          </a>
          <a href={guidaPerAcquisto} download>
            guidaPerAcquisto
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Services
