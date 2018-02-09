import React from 'react'
import Link from 'gatsby-link'
import PostLink from '../components/post-link'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const blogPosts = edges
  //.filter(edge => !!edge.node.frontmatter.date) //filter selon date
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

return <div>
  <h1>Hi there !</h1>
  <h2>Welcome to ....</h2>
  <h2>Check our latest posts</h2>
  {blogPosts}
</div>

}

export default IndexPage


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit:10
      filter: { frontmatter: { published: { eq:true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            published
          }
        }
      }
    }
  }
`