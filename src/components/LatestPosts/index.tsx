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

const defaultNumberOfPosts = 6

const LatestPosts: React.StatelessComponent<Props> = (props, { collection }: Context) => {
  const styles = require('./index.css')
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: 'Post' },
    reverse: true,
    sort: 'date',
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h2 className={ styles.latestPosts }>
        { 'Latest Posts' }
      </h2>
      <PagesList pages={ latestPosts } />
    </div>
  )
}

const PropTypes = React.PropTypes
LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
