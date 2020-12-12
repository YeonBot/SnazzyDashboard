import ClockPreference from '../components/Preference/Clock';
import GithubPreference from '../components/Preference/Github';
import { faClock, faMoon} from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const SIDEBAR = {
    WIDGET: {
        CLOCL: {
            KEY: 'CLOCK',
            LABEL: 'Clock',
            ICON: faClock,
            COMP: ClockPreference,
        },
        GITHUB: {
            KEY: 'GITHUB',
            LABEL: 'Github',
            ICON: faGithub,
            COMP: GithubPreference,
        }
    },
    DARKMODE: {
        LABEL: 'Darkmode',
        ICON: faMoon,
        COMP: '',
    }
}
