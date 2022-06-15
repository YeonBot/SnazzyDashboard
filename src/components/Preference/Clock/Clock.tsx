import * as React from 'react';
import {Input} from "reactstrap";

type Props = {
    visible: boolean,
    toggleVisible: () => void,
};

function Clock({visible, toggleVisible}: Props) {
    return (
        <div>
            Visible
            <Input type="switch" id="clockVisibleSwitch" name="customSwitch"
                         checked={visible}
                         onChange={toggleVisible}/>
        </div>
    );
}

export default Clock;