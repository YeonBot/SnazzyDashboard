import React from 'react';
import PreferenceClock from '../containers/Preference/PreferenceClock';
import PreferenceGithub from '../containers/Preference/PreferenceGithub';
import PreferenceFavorite from '../containers/Preference/PreferenceFavorite';
import { faClock, faMoon, faStar} from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const SIDEBAR = {
    WIDGET: {
        CLOCK: {
            KEY: 'CLOCK',
            LABEL: 'Clock',
            ICON: faClock,
            COMP: <PreferenceClock/>,
        },
        GITHUB: {
            KEY: 'GITHUB',
            LABEL: 'Github',
            ICON: faGithub,
            COMP: <PreferenceGithub/>,
        }
    },
    FAVORITE: {
        LINK: {
            KEY: 'LINK',
            LABEL: 'Link',
            ICON: faStar,
            COMP: <PreferenceFavorite/>,
        },
    },
    DARKMODE: {
        LABEL: 'Darkmode',
        ICON: faMoon,
        COMP: '',
    }
}
