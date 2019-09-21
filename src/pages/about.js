import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Posts will show up here later on</p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default About;