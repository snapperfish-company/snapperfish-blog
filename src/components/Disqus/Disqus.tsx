import * as React from 'react'

const DISQUS_CONFIG = [
  'shortname',
  'identifier',
  'title',
  'url',
  'category_id',
  'onNewComment',
]

let __DISQUS_ADDED__ = false

type Props = {
  shortname?: string;
  url?: string;
}

function copyProps(context, props, prefix = '') {
  Object.keys(props).forEach((prop) => context[prefix + prop] = props[prop])

  if (typeof props.onNewComment === 'function') {
    context[prefix + 'config'] = function config() {
      this.callbacks.onNewComment = [
        function handleNewComment(comment) {
          props.onNewComment(comment);
        }
      ]
    }
  }
}

export class Disqus extends React.Component<Props, undefined> {
  public render() {
    return (
      <div id='disqus_thread' />
    )
  }

  public componentDidMount() {
    this.loadDisqus()
  }

  public componentDidUpdate() {
    this.loadDisqus()
  }

  protected addDisqusScript() {
    if (__DISQUS_ADDED__) {
      return
    }

    const child = document.createElement('script');
    const parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

    child.async = true
    child.type = 'text/javascript'
    child.src = '//' + this.props.shortname + '.disqus.com/embed.js'

    parent.appendChild(child)
    __DISQUS_ADDED__ = true
  }

  protected loadDisqus() {
    const props: Props = {}
    const DISQUS = window.DISQUS

    // Extract Disqus props that were supplied to this component
    DISQUS_CONFIG.forEach((prop) => {
      if (!!this.props[prop]) {
        props[prop] = this.props[prop]
      }
    });

    // Always set URL
    if (!props.url || !props.url.length) {
      props.url = window.location.href
    }

    if (DISQUS) {
      DISQUS.reset({
        config: function config() {
          copyProps(this.page, props)

          // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
          this.page.url = this.page.url.replace(/#/, '') + '#!newthread'
        },
        reload: true,
      })
    } else {
      copyProps(window, props, 'disqus_')
      this.addDisqusScript()
    }

  }
}
