import { Language } from '.';
import { defaults } from './defaults';

export const english: Language = {
  navbar: {
    about: 'About',
    contact: 'Contact',
    config: 'Config',
    projects: 'Projects'
  },
  ...defaults
};
