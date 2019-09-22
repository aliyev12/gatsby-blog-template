import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return allContentfulBlogPost.edges.map(e => ({
    title: e.node.title,
    date: e.node.publishedDate,
    slug: e.node.slug,
  }));
};
