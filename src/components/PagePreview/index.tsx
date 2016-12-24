import * as React from 'react'
import { Link } from 'phenomic'

import Button from '../../components/Button'

interface Props {
  __url: string
  title: string
  date?: string
  description?: string
}

const PagePreview: React.StatelessComponent<Props> = ({ __url, title, date, description }: Props) => {
  const styles = require('./index.css')
  const pageDate = date ? new Date(date) : null

  const pageDateMarkup = pageDate && (
    <time key={ pageDate.toISOString() }>
      { pageDate.toDateString() }
    </time>
  )

  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
      <div className={ styles.meta }>
        { pageDateMarkup }
      </div>
      <div className={ styles.description }>
        { description }
        { ' ' }
      </div>
      <Link to={ __url } className={ styles.readMore }>
        <Button secondary>{ 'Read More' }</Button>
      </Link>
    </div>
  )
}

const PropTypes = React.PropTypes
PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default PagePreview
