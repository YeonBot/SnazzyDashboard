import React from 'react';
import ClockPreference from '../containers/Preference/PreferenceClock';
import GithubPreference from '../components/Preference/Github';
import { faClock, faMoon} from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const SIDEBAR = {
    WIDGET: {
        CLOCL: {
            KEY: 'CLOCK',
            LABEL: 'Clock',
            ICON: faClock,
            COMP: <ClockPreference/>,
        },
        GITHUB: {
            KEY: 'GITHUB',
            LABEL: 'Github',
            ICON: faGithub,
            COMP: <ClockPreference/>,
        }
    },
    DARKMODE: {
        LABEL: 'Darkmode',
        ICON: faMoon,
        COMP: '',
    }
}
