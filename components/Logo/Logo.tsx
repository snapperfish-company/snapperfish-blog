import * as React from 'react';
import { config } from 'config';

type Props = {};

export class Logo extends React.Component<Props, undefined> {
  public render() {
    const logo = require('./sf-logo.svg');
    const styles = require('./logo.module.scss');
    return (
      <div className={styles.logo}>
        <img className={styles.logo_image} src={logo} />
        <p className={styles.logo_strap}>SNAPPER FISH</p>
      </div>
    );
  }
}
