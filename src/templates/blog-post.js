import React from 'react';
import Helmet from 'react-helmet';

//Reception de l'objet BlogPost (data) 
//+ filtre son Markdown = acces à ses vars Frontmatter
export default function Template({data}){
    const {markdownRemark: post} = data;
    // const post = data.markdownRemark;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    )

}

//Requete(sous format fonction BlogPostByPath) GraphQL pour récup un BlogPost via son path
//check ma bd (mes fichiers markddwn et récu ou frontM path== $path puis le Select )
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
           html
            frontmatter {
                path
                title
            }
        }
    }
` 