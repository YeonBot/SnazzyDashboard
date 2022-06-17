import React, { Component } from 'react';
import Directory from '../../components/Bookmark/Directory';
import File from '../../components/Bookmark/File';
import DirModal from '../../components/Bookmark/DirModal';

import { getTree } from '../../chromeAPI/bookmark';

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
  selectedDirTitle: string,
};

class BookMarkCard extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      bookmarkBar: [],
      selectedDir: [],
      selectedDirTitle: '',
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.getDirById = this.getDirById.bind(this);
    this.onClickDir = this.onClickDir.bind(this);
  }

  componentDidMount() {
    getTree().then((tree) => {
      this.setState(() => ({
        bookmarkBar: tree?.children?.[0]?.children && [],
      }));
    });
  }

  onClickDir(id: number) {
    const { bookmarkBar } = this.state;
    const selectedDir = this.getDirById(bookmarkBar, Number(id));

    this.setState(() => ({
      isOpen: true,
    }));

    this.setState(() => ({
      selectedDir,
    }));
  }

  getDirById(bookmarkBar: any, id: number): any {
    for (let i = bookmarkBar.length - 1; i >= 0; i -= 1) {
      if (Number(bookmarkBar[i].id) === id) {
        this.setState(() => ({
          selectedDirTitle: bookmarkBar[i].title,
        }));
        return bookmarkBar[i].children;
      }
    }
    return null;
  }

  toggle() {
    this.setState((prev: State) => ({
      isOpen: !prev.isOpen,
    }));
  }

  render() {
    const {
      bookmarkBar, selectedDir, selectedDirTitle, isOpen,
    } = this.state;
    return (
      <div className={style.BookMarkCard}>
        {bookmarkBar.map((bookmark) => (bookmark.url
          ? (
            <File
              key={bookmark.id}
              title={bookmark.title}
              url={bookmark.url}
            />
          )
          : (
            <Directory
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              innerDir={bookmark.children}
              onClickDir={this.onClickDir}
            />
          )))}
        <DirModal
          title={selectedDirTitle}
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
