import React, {Component} from 'react';
import _get from 'lodash/get';

import Directory from "../../components/Bookmark/Directory/Directory";

import {getTree} from "../../chromeAPI/bookmark";

import style from './BookMarkCard.module.scss';

type State = {
    bookmarkBar: Array<{
        id: number,
        title:string,
        children: Array<any>,
    }>
};

class BookMarkCard extends Component {

    constructor(props:any) {
        super(props);

    }
    state:State = {
        bookmarkBar: [],
    }

    componentDidMount(){
        getTree().then((tree)=>{
            this.setState(()=> ({
               bookmarkBar: _get(tree,'0.children.0.children',[]),
            }));
        });
    }

    render() {
        const {bookmarkBar} = this.state;
        console.log(bookmarkBar);

        return (
            <div className={style.BookMarkCard}>
                {bookmarkBar.map((bookmark)=> (
                    <Directory key={bookmark.id}
                               title={bookmark.title}
                               innerDir={bookmark.children}
                    />
                ))}
            </div>
        );
    }
}

export default BookMarkCard;