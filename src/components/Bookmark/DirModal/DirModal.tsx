import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalBody} from 'reactstrap';

import Directory from "../Directory";
import File from "../File";

import styles from './DirModal.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const FILE_COUNT_BY_PAGE = 16;

type Props = {
    title: string;
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

function DirModal({title, isOpen, toggle, selectedBookmarkBar, onClickDir}: Props) {

    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(1);

    useEffect(() => {
        const childLength = selectedBookmarkBar.length;
        setMaxPage(Math.floor(childLength / FILE_COUNT_BY_PAGE + 1));
    }, [selectedBookmarkBar]);

    const onClickLeftPage = () => {
        setPage(page - 1);
    }

    const onClickRightPage = () => {
        setPage(page + 1);
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle}
               centered
               className={styles.DirModal}
               backdropClassName={styles.DirModal__backdrop}>
            <div className={styles.DirModal__header}>{title}</div>

            {page !== 1 &&
            <div className={styles.DirModal__button_left}>
                <Button color="dark" onClick={onClickLeftPage}>
                    <FontAwesomeIcon icon={faChevronLeft} size='lg'/>
                </Button>
            </div>
            }

            {page !== maxPage &&
            <div className={styles.DirModal__button_right}>
                <Button color="dark" onClick={onClickRightPage}>
                    <FontAwesomeIcon icon={faChevronRight} size='lg'/>
                </Button>
            </div>
            }
            <ModalBody className={styles.DirModal__body}>
                {selectedBookmarkBar
                    .filter((bookmark, idx) => {
                        if (idx >= (page - 1) * FILE_COUNT_BY_PAGE && idx < page * FILE_COUNT_BY_PAGE) {
                            return true;
                        }
                        return false;
                    })
                    .map((bookmark, idx) => {
                            return bookmark.url
                                ? <File key={bookmark.id + idx}
                                        title={bookmark.title}
                                        url={bookmark.url}
                                />
                                : <Directory key={bookmark.id + idx}
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