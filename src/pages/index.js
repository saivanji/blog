import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { formatReadingTime } from '../utils'

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      <div className="posts">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <section key={node.fields.slug}>
              <header>
                <h3 className="posts-title">
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>
                  {node.frontmatter.date} • {formatReadingTime(node.timeToRead)}
                </small>
              </header>
              <p
                dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
              />
            </section>
          )
        })}
      </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`
