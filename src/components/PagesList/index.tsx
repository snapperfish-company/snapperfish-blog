import * as React from 'react'
import PagePreview from '../PagePreview'

interface Page {
  title: string
  __url: string
}

interface Props {
  pages: Page[]
}

const PagesList: React.StatelessComponent<Props> = ({ pages }) => {
  const styles = require('./index.css')

  const listItems = pages.map((page) => (
    <li key={ page.title }><PagePreview { ...page } /></li>
  ))

  const pagesMarkup = pages.length ? (
    <ul className={ styles.list }>{listItems}</ul>
  ) : ('No posts yet.')

  return (
    <div>
      { pagesMarkup }
    </div>
  )
}

const PropTypes = React.PropTypes
PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
