import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Disqus from '../components/disqus'
import { formatReadingTime } from '../utils'

export default ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const keywords = post.frontmatter.keywords.split(', ')
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        keywords={keywords}
      />
      <div className="post">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p className="post-info">
            {post.frontmatter.date} • {formatReadingTime(post.timeToRead)}
          </p>
        </header>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Disqus />
        <ul className="post-pagination">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        keywords
      }
    }
  }
`
