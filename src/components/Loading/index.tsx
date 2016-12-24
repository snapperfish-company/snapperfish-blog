import React = require('react')
import Helmet = require('react-helmet')
import TopBarProgressIndicator from 'react-topbar-progress-indicator'

TopBarProgressIndicator.config({
  barColors: {
    '0': '#fff',
    '1.0': '#fff',
  },
  shadowBlur: 5,
})

const Loading: React.StatelessComponent<{}> = () => {
  const styles = require('./index.css')
  return (
    <div>
      <Helmet
        title={ 'Loading...' }
      />
      <TopBarProgressIndicator />
      <div className={ styles.loader }>
        <div className={ styles.spinner } />
      </div>
    </div>
  )
}

export default Loading
