import React from 'react'

import Carousel from '../containers/Carousel'
import ProductRow from '../containers/ProductRow'
import FeaturingLayout from '../containers/FeaturingLayout'
import Layout from '../components/Layout'

const featuringList = await fetch('https://fakestoreapi.com/products/category/electronics?limit=2')

const featuring = await featuringList.json();


function Home() {
  return (
        <Layout>
            <Carousel 
              imageOne="https://www.geekawhat.com/wp-content/uploads/2022/05/3070-High-End-Build-Feature-Image.jpg" 
              imageTwo="https://www.geekawhat.com/wp-content/uploads/2022/09/White-Themed-RTX-3060Ti-PC-Build-Featured-Image.jpg" 
              imageThree="https://cdn.mos.cms.futurecdn.net/Bt6zzj9VXXEmefsvGbeiLK-1200-80.jpg" 
              imageFour="https://i.ytimg.com/vi/4cAgZnzYdLY/maxresdefault.jpg" 
              imageFive="https://external-preview.redd.it/mhuyPlJlTbIvxjUzG6_wSlDPi_QA-lD00TZWOt0NSsU.jpg?auto=webp&s=745a74445de3e79efc3e7c7dc710792d7418f7fa">
            </Carousel>
            <ProductRow>
            </ProductRow>
            <FeaturingLayout
            Url='#'
            title={featuring[0].title}
            image={featuring[0].image}
            price={featuring[0].price}
            
            UrlTwo='#'
            titleTwo={featuring[1].title}
            imageTwo={featuring[1].image}
            priceTwo={featuring[1].price}>
            </FeaturingLayout>
        </Layout>
  )
}

export default Home 