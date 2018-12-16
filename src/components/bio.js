import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              marginBottom: `3.9375rem`,
            }}
          >
            <div className="bio">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: `0.875rem`,
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: '100%',
                }}
              />
              <p>
                Written by <strong>{author}</strong> independent software
                consultant, specifying on building complex solutions
              </p>
            </div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div>
                <a href="#">Open source</a>
                &nbsp; &nbsp;
                <a href="#">Hire me</a>
              </div>
              <div
                style={{
                  marginLeft: 'auto',
                }}
              >
                <a href="#">Subscribe</a>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
