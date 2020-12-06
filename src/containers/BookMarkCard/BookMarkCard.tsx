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
    isOpen: boolean,
};

class BookMarkCard extends Component {

    constructor(props:any) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    state: State = {
        bookmarkBar: [],
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
        this.setState((prev:State)=>({
            isOpen: !prev.isOpen,
        }))
    }

    render() {
        const {bookmarkBar,isOpen} = this.state;
        console.log(bookmarkBar);

        return (
            <div className={style.BookMarkCard}>
                {bookmarkBar.map((bookmark) => {
                        return bookmark.url
                            ? <File key={bookmark.id}
                                    title={bookmark.title}
                                    url={bookmark.url}
                            />
                            : <Directory key={bookmark.id}
                                         title={bookmark.title}
                                         innerDir={bookmark.children}
                                         onClickDir={this.toggle}
                            />
                    }
                )}
                <DirModal
                    isOpen={isOpen}
                    toggle={this.toggle}
                />
            </div>
        );
    }
}

export default BookMarkCard;