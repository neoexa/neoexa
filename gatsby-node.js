/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

 exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;    

    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
        // Query for markdown nodes to use in creating pages.
        resolve(
          graphql(
            `
              {
                allMarkdownRemark(limit: 50) {
                  edges {
                    node {
                        id
                        html
                        frontmatter {
                            path
                            title
                        }
                    }
                  }
                }
              }
            `
          ).then(result => {
        if(result.errors) {
            reject(result.errors);
        }
        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            const path = node.frontmatter.path;
            createPage({
                path,
                component: blogPostTemplate,
                //layout: blog-layout.js
                context: { 
                    path,
                }
            })
        })
    })
)
})
}