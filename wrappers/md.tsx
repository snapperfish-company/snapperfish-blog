import * as React from 'react';
import 'css/markdown-styles.css';
import * as Helmet from 'react-helmet';
import { config } from 'config';

interface Props {
  route: any;
}

class MarkdownWrapper extends React.Component<Props, undefined> {
  public render() {
    const post = this.props.route.page.data;
    return (
      <div className='markdown'>
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <h1>{post.title}</h1>
        <p>W00t</p>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    );
  }
}

module.exports = MarkdownWrapper;
