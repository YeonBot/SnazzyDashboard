import * as React from 'react';
import { Input, FormGroup } from "reactstrap";

type Props = {
    visible: boolean,
    toggleVisible: () => void,
};

function Clock({ visible, toggleVisible }: Props) {
    return (
        <div>
            Visible
            <FormGroup switch>
                <Input type="switch"
                    id="clockVisibleSwitch" name="customSwitch"
                    checked={visible}
                    onChange={toggleVisible} />
            </FormGroup>
        </div>
    );
}

export default Clock;