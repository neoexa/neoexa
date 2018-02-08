module.exports = {
  siteMetadata: {
    title: 'neoexa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/src/posts',
        name: 'posts',
      }
    },
    'gatsby-transformer-remark'
  ],
};
