// import { Component } from 'react';

// declare module 'react-helmet' {
//   export function Helmet: Component;
// }

declare module 'gatsby-helpers' {
  export function prefixLink(str: string): string;
}

interface Config {
  siteTitle: string;
}

declare module 'config' {
  export const config: Config;
}