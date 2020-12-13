import * as React from 'react';
import {CustomInput} from "reactstrap";

type Props = {
    visible: boolean,
    toggleVisible: () => void,
};

function Favorite({visible, toggleVisible}: Props) {
    return (
        <div>
            FVisible
            <CustomInput type="switch" id="clockVisibleSwitch" name="customSwitch"
                         checked={visible}
                         onChange={toggleVisible}/>
        </div>
    );
}

export default Favorite;