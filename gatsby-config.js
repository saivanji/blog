module.exports = {
  siteMetadata: {
    title: 'Passionated programming',
    author: 'Ivan Mironchik',
    description: 'Software Engineering blog',
    siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
    keywords: ['aiven715', 'programming blog', 'software blog'],
    social: {
      mail: 'mailto:aiven715@gmail.com',
      github: '//github.com/aiven715',
      twitter: '//twitter.com/aiven715',
      stackoverflow: '//stackoverflow.com/users/10788188/aiven715',
      linkedin: '//linkedin.com/in/aiven715',
      facebook: '//facebook.com/aiven715',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
