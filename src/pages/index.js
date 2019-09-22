import React from "react"
import { Link } from "gatsby"
import Head from '../components/head';

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Lorem.</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem ipsum dolor sit.</p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default IndexPage
