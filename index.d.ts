declare module 'safe-access' {
  function access(obj: Object, str:string): any;
  export = access;
}

declare module 'core-js/library/fn/string/includes' {
  function includes(str: string, search: string): boolean;
  export = includes;
}