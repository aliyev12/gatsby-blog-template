import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
// import getContent from "../helpers/getContent";
import useGetContent from "../hooks/useGetContent";
import blogStyles from "./blog.module.scss";
import Head from '../components/head';

const BlogPage = () => {
  const data = useGetContent();
  // const data = getContent();

  return (
    <Layout>
      <Head title="Blog"/>
      <ol className={blogStyles.posts}>
        {data.map(({ title, date, slug }, i) => (
          <li key={i} className={blogStyles.post}>
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
