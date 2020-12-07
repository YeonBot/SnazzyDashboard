import React, {Component} from 'react';
import _get from 'lodash/get';

import Directory from "../../components/Bookmark/Directory";
import File from "../../components/Bookmark/File";
import DirModal from "../../components/Bookmark/DirModal";

import {getTree} from "../../chromeAPI/bookmark";

import style from './BookMarkCard.module.scss';

type State = {
    bookmarkBar: Array<{
        id: number,
        title: string,
        url: string,
        children: Array<any>,
    }>,
    selectedDir: Array<{
        id: number,
        title: string,
        url: string,
        children: Array<any>,
    }>,
    isOpen: boolean,
};

class BookMarkCard extends Component {

    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.getDirById = this.getDirById.bind(this);
        this.onClickDir = this.onClickDir.bind(this);
    }

    state: State = {
        bookmarkBar: [],
        selectedDir: [],
        isOpen: false,
    }

    componentDidMount() {
        getTree().then((tree) => {
            this.setState(() => ({
                bookmarkBar: _get(tree, '0.children.0.children', []),
            }));
        });
    }

    toggle() {
        this.setState((prev: State) => ({
            isOpen: !prev.isOpen,
        }))
    }

    getDirById(bookmarkBar: any, id: number): any {
        for (let i = bookmarkBar.length - 1; i >= 0; i--) {
            if (Number(bookmarkBar[i].id) === id) {
                return bookmarkBar[i].children;
                break;
            } else if (Number(bookmarkBar[i].id) < id) {
                return this.getDirById(bookmarkBar[i].children,id);
            }
        }
    }

    onClickDir(id: number) {

        const {bookmarkBar} = this.state;
        const selectedDir = this.getDirById(bookmarkBar, Number(id));

        this.setState((prev: State) => ({
            isOpen: true,
        }));

        this.setState(() => ({
            selectedDir,
        }));
    }

    render() {
        const {bookmarkBar, selectedDir, isOpen} = this.state;
        return (
            <div className={style.BookMarkCard}>
                {bookmarkBar.map((bookmark, idx) => {
                        return bookmark.url
                            ? <File key={bookmark.id}
                                    title={bookmark.title}
                                    url={bookmark.url}
                            />
                            : <Directory key={bookmark.id}
                                         id={bookmark.id}
                                         title={bookmark.title}
                                         innerDir={bookmark.children}
                                         onClickDir={this.onClickDir}
                            />
                    }
                )}
                <DirModal
                    isOpen={isOpen}
                    toggle={this.toggle}
                    selectedBookmarkBar={selectedDir}
                    onClickDir={this.onClickDir}
                />
            </div>
        );
    }
}

export default BookMarkCard;