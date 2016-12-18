import * as React from 'react';
import '../css/markdown-styles';
import '../css/template';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import * as Com from '../components';


interface Props {
  children: any;
}

export default class Template extends React.Component<Props, undefined> {
  public render() {
    return (
      <div className='page'>
        <div className='page_header'>
          <div className='header'>
            <Link to={prefixLink('/')}>
              <Com.Logo />
            </Link>
          </div>
          <div className='footer'>
            <Com.Copyright />
          </div>
        </div>
        <div className='page_content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
