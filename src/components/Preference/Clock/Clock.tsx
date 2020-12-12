import * as React from 'react';
import {CustomInput} from "reactstrap";

type Props = {
    visible: boolean,
    toggleVisible: () => void,
};

function Clock({visible, toggleVisible}: Props) {
    return (
        <div>
            Visible
            <CustomInput type="switch" id="clockVisibleSwitch" name="customSwitch"
                         checked={visible}
                         onChange={toggleVisible}/>
        </div>
    );
}

export default Clock;