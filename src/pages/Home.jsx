import React from 'react'

import Carousel from '../containers/Carousel'
import ProductRow from '../containers/ProductRow'
import FeaturingLayout from '../containers/FeaturingLayout'
import Layout from '../components/Layout'

function Home() {

  return (
        <Layout>
            <Carousel/>
            <ProductRow/>
            <FeaturingLayout/>
        </Layout>
  )
}

export default Home 