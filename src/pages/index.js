import React from 'react'
import Layout from '../components/layout'
import Welcome from '../components/welcome'
import Hotjar from '@hotjar/browser'

const siteId = process.env.GATSBY_HOTJAR_SITE_ID
const hotjarVersion = 6

Hotjar.init(siteId, hotjarVersion)

const IndexPage = () => (
  <Layout>
    <Welcome />
  </Layout>
)

export default IndexPage
