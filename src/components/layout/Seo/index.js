import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </>
)

export default SEO
