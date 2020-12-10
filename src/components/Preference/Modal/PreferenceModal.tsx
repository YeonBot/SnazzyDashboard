import React, {useState} from 'react';
import {Modal, ModalBody} from 'reactstrap';
import classNames from 'classnames/bind';
import {pure} from 'recompose';

import styles from './PreferenceModal.module.scss';
import {SIDEBAR} from '../../../constants/preference';

const cx = classNames.bind(styles);

type Props = {
    isOpen: boolean;
    toggle: () => void;
}

function PreferenceModal({isOpen, toggle}: Props) {

    const [selectedSideBarKey, changeSideBarKey] = useState<string>(SIDEBAR.WIDGET.GITHUB.KEY);

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered className={styles.PreferenceModal}>
            <ModalBody className={styles.PreferenceModal__body}>
                <div className={styles.PreferenceModal__sidebar}>
                    <div className={styles.PreferenceModal__sidebar__title}>Widget</div>
                    {
                        Object.keys(SIDEBAR.WIDGET).map((sidebarkey) => (
                            <div key={sidebarkey}
                                 className={cx('PreferenceModal__sidebar__item',
                                     {"PreferenceModal__sidebar__item-selected": sidebarkey === selectedSideBarKey})
                                 }>
                                <div onClick={() => {
                                    changeSideBarKey(sidebarkey)
                                }}>
                                    {SIDEBAR.WIDGET[sidebarkey as keyof typeof SIDEBAR.WIDGET].LABEL}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.PreferenceModal__content}>

                </div>
            </ModalBody>
        </Modal>
    );
}

export default pure(PreferenceModal);