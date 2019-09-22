import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.edges.map(e => ({
    title: e.node.frontmatter.title,
    date: e.node.frontmatter.date,
    slug: e.node.fields.slug,
  }));
};
