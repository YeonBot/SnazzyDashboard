import React from 'react';
import PreferenceClock from '../containers/Preference/PreferenceClock';
import PreferenceGithub from '../containers/Preference/PreferenceGithub';
import { faClock, faMoon} from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const SIDEBAR = {
    WIDGET: {
        CLOCL: {
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
    DARKMODE: {
        LABEL: 'Darkmode',
        ICON: faMoon,
        COMP: '',
    }
}
