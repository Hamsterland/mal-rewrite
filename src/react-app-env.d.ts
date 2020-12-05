/// <reference types="react-scripts" />

declare module '*.mp4' {
    const src: string;
    export default src;
}

declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}