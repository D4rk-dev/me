import { Language } from '.';
import { defaults } from './defaults';

export const spanish:Language = {
  navbar: {
    projects: 'Proyectos',
    about: 'Sobre mi',
    contact: 'Contacto',
    config: 'Configuración'
  },
  languages:{
    spanish: 'Español',
    english: 'Inglés'
  },
  ...defaults
};
