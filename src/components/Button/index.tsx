import * as React from 'react'
import * as cx from 'classnames'

interface Props {
  className?: string
  children?: JSX.Element
  secondary?: boolean
  light?: boolean
  big?: boolean
}

const Button: React.StatelessComponent<Props> = ({ className, secondary, light, big, ...otherProps }) => {
  const styles = require('./index.css')
  const classes = {
    [className]: className,
    [styles.button]: true,
    [styles.secondary]: secondary,
    [styles.light]: light,
    [styles.big]: big,
  }

  return (
    <span
      role='button'
      { ...otherProps }
      className={ cx(classes) }
    />
  )
}

Button.propTypes = {
  big: React.PropTypes.bool,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  light: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
}

Button.displayName = 'Button'

export default Button
