import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import blogStyles from './blog.module.scss';

const BlogPage = () => {
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

  const frontmatter = allMarkdownRemark.edges.map(e => ({
    title: e.node.frontmatter.title,
    date: e.node.frontmatter.date,
    slug: e.node.fields.slug,
  }));

  return (
    <Layout>
      <ol>
        {frontmatter.map(({ title, date, slug }, i) => (
          <li key={i}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>Date: {date}</p>
            </Link>
            <hr />
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
