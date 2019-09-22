import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Head from '../components/head';

const About = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>Posts will show up here later on</p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default About;