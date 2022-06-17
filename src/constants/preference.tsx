import React from 'react';
import {
  faClock, faMoon, faStar, faCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PreferenceClock from '@containers/ preference/PreferenceClock';
import PreferenceGithub from '@containers/ preference/PreferenceGithub';
import PreferenceFavorite from '@containers/ preference/PreferenceFavorite';
import PreferenceTodo from '@containers/ preference/PreferenceTodo';

export const SIDEBAR = {
  WIDGET: {
    CLOCK: {
      KEY: 'CLOCK',
      LABEL: 'Clock',
      ICON: faClock,
      COMP: <PreferenceClock />,
    },
    GITHUB: {
      KEY: 'GITHUB',
      LABEL: 'Github',
      ICON: faGithub,
      COMP: <PreferenceGithub />,
    },
    TODO: {
      KEY: 'TODO',
      LABEL: 'TODO',
      ICON: faCheckSquare,
      COMP: <PreferenceTodo />,
    },
  },
  FAVORITE: {
    LINK: {
      KEY: 'LINK',
      LABEL: 'Link',
      ICON: faStar,
      COMP: <PreferenceFavorite />,
    },
  },
  DARKMODE: {
    LABEL: 'Darkmode',
    ICON: faMoon,
    COMP: '',
  },
};
