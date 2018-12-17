import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { formatReadingTime } from '../utils'

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Open source contribution"
        keywords={['open-source', 'contribution']}
      />
      <p>Here, I'll put open source projects I'm contributing.</p>
      <p>
        <a href="//github.com/aiven715/promise-hook">promise-hook</a> is a React
        library which leverages hooks conception to provide simple and
        consistent way to handle async Promise interactions in React
        applications.
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
