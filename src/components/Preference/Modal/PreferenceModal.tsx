import React, {useState} from 'react';
import {Modal, ModalBody, CustomInput} from 'reactstrap';
import classNames from 'classnames/bind';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


import styles from './PreferenceModal.module.scss';
import {SIDEBAR} from '../../../constants/preference';

const cx = classNames.bind(styles);

type Props = {
    isOpen: boolean;
    toggle: () => void;
}

function PreferenceModal({isOpen, toggle}: Props) {

    const [selectedSideBarKey, changeSideBarKey] = useState<string>(SIDEBAR.WIDGET.GITHUB.KEY);
    const [SelectedComp, changeComp] = useState<any>(SIDEBAR.WIDGET.GITHUB.COMP);

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered className={styles.PreferenceModal}>
            <ModalBody className={styles.PreferenceModal__body}>
                <div className={styles.PreferenceModal__sidebar}>
                    <div className={styles.PreferenceModal__sidebar__title}>Widget</div>
                    {
                        Object.keys(SIDEBAR.WIDGET).map((sidebarkey) => {
                            const ICON = SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET].ICON;
                            return (
                                <div key={sidebarkey}
                                     className={cx('PreferenceModal__sidebar__item',
                                         {"PreferenceModal__sidebar__item-selected": sidebarkey === selectedSideBarKey})
                                     }>
                                    <div onClick={() => {
                                        changeSideBarKey(sidebarkey)
                                        changeComp(SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET].COMP)
                                    }}>
                                        <FontAwesomeIcon icon={ICON} size='lg'/>
                                        {SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET].LABEL}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <span className={cx('PreferenceModal__sidebar__hr')}>
                        <hr/>
                    </span>
                    <div className={cx('PreferenceModal__sidebar__darkmode')}>
                        <div>
                            <FontAwesomeIcon icon={SIDEBAR.DARKMODE.ICON} size='lg'/>
                            {SIDEBAR.DARKMODE.LABEL}
                        </div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"/>
                    </div>
                </div>
                <div className={styles.PreferenceModal__content}>
                    {SelectedComp}
                </div>
            </ModalBody>
        </Modal>
    );
}

export default PreferenceModal;