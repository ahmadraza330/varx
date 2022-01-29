import * as React from "react"


import Layout from "../components/ui/layout"
import HeroBlock from '../components/home/HeroBlock'
import PrmotionalProduct from "../components/home/PrmotionalProduct"

const IndexPage = () => (
  <Layout>
      <HeroBlock/>
      <PrmotionalProduct/>
  </Layout>
)

export default IndexPage
