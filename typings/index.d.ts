type Config = () => void

interface DisqusSettings {
  config(): void
  reload: boolean
}

interface Disqus {
  reset(settings: DisqusSettings): void
}

interface Window {
  DISQUS: Disqus
}