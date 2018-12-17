import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { formatReadingTime } from '../utils'

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Subscribe" keywords={['subscribe']} />
      <p>Subscribe to get monthly updates of my activity on that blog.</p>
      <form onSubmit={subscribe}>
        <label className="form-row">
          <span className="form-label">Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label className="form-row">
          <span className="form-label">
            Who you are? <span className="optional">(optional)</span>:
          </span>
          <textarea name="introduction" />
        </label>
        <button type="submit">Subscribe</button>
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

function subscribe(e) {
  e.preventDefault()

  const email = e.target.email.value
  const introduction = e.target.introduction.value

  console.log(email, introduction)
}
