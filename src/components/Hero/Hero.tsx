import * as React from 'react'
import * as classNames from 'classnames'
import { Link } from 'phenomic'
import Button from '../../components/Button'

export interface CTAProps {
  link: string
  label: string
  props: any
}

interface Image {
  url: string
  gradient: boolean
}

interface Props {
  cta?: CTAProps
  image?: string | Image
  title: string
}

const Hero: React.StatelessComponent<Props> = ({ title, image, cta }) => {
  const styles = require('./hero.css')
  const classes = {
    [styles.hero]: true,
  }

  let ctaMarkup
  if (cta) {
    ctaMarkup = (
      <Link to={ cta.link }>
        <Button className={ styles.cta } light { ...cta.props }>
          { cta.label }
        </Button>
      </Link>
    )
  }

  let heroStyles
  let gradient = false

  if (image) {
    let url = image

    if (typeof image !== 'string') {
      url = image.url
      gradient = image.gradient
    }

    heroStyles = {
      background: `#111 url(${ url }) 50% 50% / cover`,
    }
  }

  return (
    <div
      className={ classNames(classes) }
      style={heroStyles}
    >
      <div className={ classNames({ [styles.header]: true, [styles['header--gradient']]: gradient }) }>
        <div className={ styles.wrapper }>
          <h1 className={ styles.heading }>{ title }</h1>
          {ctaMarkup}
        </div>
      </div>
    </div>
  )
}

const PropTypes = React.PropTypes
Hero.propTypes = {
  cta: PropTypes.object,
  image: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.object,
  ]),
  title: PropTypes.string.isRequired,
}

Hero.displayName = 'Hero'

export default Hero
