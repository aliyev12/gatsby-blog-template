import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from '../components/head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} width="500"/>
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}/>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  );
};

export default Blog;

// import React from "react";
// import Layout from "../components/layout";
// import { graphql, useStaticQuery } from "gatsby";

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;

// const Blog = ({ data: { markdownRemark } }) => {
//   return (
//     <Layout>
//       <h1>{markdownRemark.frontmatter.title}</h1>
//       <p>{markdownRemark.frontmatter.date}</p>
//       <div
//         dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
//       ></div>
//     </Layout>
//   );
// };

// export default Blog;
