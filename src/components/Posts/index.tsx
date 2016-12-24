import * as React from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import PagesList from '../../components/PagesList'

interface Props {
  numberOfPosts?: number
}

interface Collection {}

interface Context {
  collection: Collection[]
}

const Posts: React.StatelessComponent<Props> = (props, { collection }: Context) => {
  const styles = require('./index.css')
  const posts = enhanceCollection(collection, {
    filter: { layout: 'Post' },
    reverse: true,
    sort: 'date',
  })

  return <PagesList pages={ posts } />
}

const PropTypes = React.PropTypes
Posts.propTypes = {
  numberOfPosts: PropTypes.number,
}

Posts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Posts
