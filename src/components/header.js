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
              <a href={social.mail}>
                <img src={withPrefix('/icons/mail.svg')} />
              </a>
              <a href={social.github}>
                <img src={withPrefix('/icons/github.svg')} />
              </a>
              <a href={social.twitter}>
                <img src={withPrefix('/icons/twitter.svg')} />
              </a>
              <a href={social.stackoverflow}>
                <img src={withPrefix('/icons/stack-overflow.svg')} />
              </a>
              <a href={social.linkedin}>
                <img src={withPrefix('/icons/linkedin.svg')} />
              </a>
              <a href={social.facebook}>
                <img src={withPrefix('/icons/facebook.svg')} />
              </a>
            </div>
          </div>
          <div className="bio">
            <img src={withPrefix('/images/avatar.jpg')} alt={author} />
            <p>
              Written by <strong>{author}</strong> independent software
              consultant, specifying on building complex web applications
            </p>
          </div>
          <div className="menu">
            <div>
              <Link to="/open-source">Open source</Link>
              &nbsp; &nbsp;
              <Link to="/hire-me">Hire me</Link>
            </div>
            <div className="menu-right">
              <Link to="/subscribe">Subscribe</Link>
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
        social {
          mail
          github
          twitter
          stackoverflow
          linkedin
          facebook
        }
      }
    }
  }
`
