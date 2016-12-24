import * as React from 'react'
import Helmet = require('react-helmet')
import warning = require('warning')
import { BodyContainer, joinUri, Link } from 'phenomic'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import Hero, { CTAProps } from '../../components/Hero/Hero'

interface HeadProps {
  description?: string
  cta?: CTAProps
  title: string
  hero?: string
  metaTitle?: string
}

interface Props {
  isLoading?: boolean
  __filename?: string
  __url?: string
  head: HeadProps
  body?: string
  header?: JSX.Element
  footer?: JSX.Element
}

interface PKG {
  twitter: string
}

interface Context {
  metadata: { pkg: any }
}

const Page: React.StatelessComponent<Props> = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }: Context,
) => {
  const styles = require('./index.css')
  warning(typeof head.title === 'string', `Your page '${ __filename }' needs a title`)

  let metaTitle = head.metaTitle ? head.metaTitle : head.title
  metaTitle += ' | Snapper.Fish'

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      property: 'og:url',
    },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${ pkg.twitter }` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <Hero title={ head.title } image={ head.hero } cta={ head.cta } />
      <div className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        <div className={ styles.body }>
          {
            isLoading
            ? <Loading />
            : <BodyContainer>{ body }</BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

const PropTypes = React.PropTypes
Page.propTypes = {
  __filename: PropTypes.string,
  __url: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.element,
  head: PropTypes.object.isRequired,
  header: PropTypes.element,
  isLoading: PropTypes.bool,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
