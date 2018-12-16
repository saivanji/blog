import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.1/css/brands.css"
            integrity="sha384-whKHCkwP9f4MyD1vda26+XRyEg2zkyZezur14Kxc784RxUU1E7HvWVYj9EoJnUV7"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.1/css/fontawesome.css"
            integrity="sha384-WK8BzK0mpgOdhCxq86nInFqSWLzR5UAsNg0MGX9aDaIIrFWQ38dGdhwnNCAoXFxL"
            crossorigin="anonymous"
          />
        </Helmet>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.75rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {title}
              </Link>
            </h3>
            <div
              className="social"
              style={{
                marginLeft: 'auto',
                lineHeight: 1,
              }}
            >
              <i className="fab fa-github" />
              <i className="fab fa-twitter" />
              <i className="fab fa-stack-overflow" />
              <i className="fab fa-linkedin" />
              <i className="fab fa-facebook-f" />
            </div>
          </div>
          {children}
        </div>
      </>
    )
  }
}

export default Layout
