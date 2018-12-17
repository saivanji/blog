import React from 'react'
import Helmet from 'react-helmet'

import Header from './header'

export default ({ title, children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Montserrat:900"
        rel="stylesheet"
      />
    </Helmet>
    <div className="container">
      <Header title={title} />
      {children}
    </div>
  </>
)
