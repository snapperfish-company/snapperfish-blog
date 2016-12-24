import * as React from 'react'
import Posts from '../../components/Posts'
import Page from '../Page'

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <Posts />
    </Page>
  )
}

export default Homepage
