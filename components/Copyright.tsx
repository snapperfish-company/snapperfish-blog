import * as React from 'react';
import { config } from 'config';

type Props = {};

export class Copyright extends React.Component<Props, undefined> {
  public render() {
    return (
      <div className='copyright'>{config.copyright}</div>
    );
  }
}
