import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

import styles from './DirModal.module.scss';

type Props = {
    isOpen:boolean;
    toggle: () => void;
}

function DirModal({isOpen,toggle}:Props) {

    return (
            <Modal isOpen={isOpen} toggle={toggle} centered={true} className={styles.DirModal}>
                <ModalBody className={styles.DirModal__body}>
                    ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
                </ModalBody>
            </Modal>
    );
}

export default DirModal;