type S = string;
export interface Language {
  navbar: {
    about: S;
    contact: S;
    config: S;
    projects: S;
  };
  name: S;
  [key: string]: any;
}

export { spanish } from './spanish';
export { english } from './english';
