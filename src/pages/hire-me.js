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
        title="Hire me"
        keywords={[
          'hire',
          'freelance',
          'developer',
          'javascript',
          'react',
          'reactjs',
          'nodejs',
        ]}
      />
      <p>
        If you like my mindset and the way I solve the problems drop me a line
        via the form above.
      </p>
      <form onSubmit={hire}>
        <label className="form-row">
          <span className="form-label">Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label className="form-row">
          <span className="form-label">What your project is about?:</span>
          <textarea name="description" required />
        </label>
        <button type="submit">Hire me</button>
      </form>
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

function hire(e) {
  e.preventDefault()

  const email = e.target.email.value
  const description = e.target.description.value

  console.log(email, description)
}
