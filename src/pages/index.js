import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Lorem.</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem ipsum dolor sit.</p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default IndexPage
