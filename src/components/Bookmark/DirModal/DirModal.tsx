import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

import Directory from "../Directory";
import File from "../File";

import styles from './DirModal.module.scss';

type Props = {
    isOpen: boolean;
    toggle: () => void;
    selectedBookmarkBar: Array<{
        id: number,
        title: string,
        url: string,
        children: Array<any>,
    }>,
    onClickDir: (key: number) => void;
}

function DirModal({isOpen,toggle, selectedBookmarkBar,onClickDir}:Props) {

    return (
            <Modal isOpen={isOpen} toggle={toggle} centered className={styles.DirModal}>
                <ModalBody className={styles.DirModal__body}>
                    {selectedBookmarkBar.map((bookmark, idx) => {
                            return bookmark.url
                                ? <File key={bookmark.id}
                                        title={bookmark.title}
                                        url={bookmark.url}
                                />
                                : <Directory key={bookmark.id}
                                             id={bookmark.id}
                                             title={bookmark.title}
                                             innerDir={bookmark.children}
                                             onClickDir={onClickDir}
                                />
                        }
                    )}
                </ModalBody>
            </Modal>
    );
}

export default DirModal;