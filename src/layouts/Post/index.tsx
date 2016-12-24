import * as React from 'react'
import Page from '../Page'
import { Disqus } from '../../components'

interface Head {
  date: string
  title: string
  metaTitle: string
}

interface Props {
  head: Head
}

const PropTypes = React.PropTypes

class Post extends React.Component<Props, {}> {
  public static propTypes = {
    head: PropTypes.object.isRequired,
  }

  public render() {
    // it's up to you to choose what to do with this layout ;)
    const props = this.props
    const pageDate = props.head.date ? new Date(props.head.date) : null
    const styles = require('./index.css')

    return (
      <Page
        { ...props }
        header={this.renderHeader(pageDate, styles.header)}
      >
        <hr />
        <Disqus shortname='snapperfish' />
      </Page>
    )
  }

  protected renderHeader(pageDate: Date, headStyle: string) {
    let pageDateMarkup

    if (pageDate) {
      pageDateMarkup = (
        <time key={ pageDate.toISOString() }>
          { pageDate.toDateString() }
        </time>
      )
    }

    return (
      <div>
        <header className={ headStyle }>
          {pageDateMarkup}
        </header>
      </div>
    )
  }
}



export default Post
