import React from 'react'
import Image from 'gatsby-image'
import { StaticQuery, Link, graphql, withPrefix } from 'gatsby'

export default ({ title }) => (
  <StaticQuery
    query={dataQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata

      return (
        <header className="page-header">
          <div className="page-title">
            <h3>
              <Link to="/">{title}</Link>
            </h3>
            <div className="social">
              <img src={withPrefix('/icons/github.svg')} />
              <img src={withPrefix('/icons/twitter.svg')} />
              <img src={withPrefix('/icons/stack-overflow.svg')} />
              <img src={withPrefix('/icons/linkedin.svg')} />
              <img src={withPrefix('/icons/facebook.svg')} />
            </div>
          </div>
          <div className="bio">
            <img src={withPrefix('/images/avatar.jpg')} alt={author} />
            <p>
              Written by <strong>{author}</strong> independent software
              consultant, specifying on building complex solutions
            </p>
          </div>
          <div className="menu">
            <div>
              <a href="#">Open source</a>
              &nbsp; &nbsp;
              <a href="#">Hire me</a>
            </div>
            <div className="menu-right">
              <a href="#">Subscribe</a>
            </div>
          </div>
        </header>
      )
    }}
  />
)

const dataQuery = graphql`
  query DataQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`
