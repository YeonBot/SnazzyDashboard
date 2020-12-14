import React, {useState} from 'react';
import {Input} from "reactstrap";

type Props = {
    list: Array<string>,
    setFavoriteItem: (favoriteItem: string) => void,
};

function Favorite({list, setFavoriteItem}: Props) {

    const [inputFavoriteItem, setInputFavoriteItem] = useState<string>('');

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter' && inputFavoriteItem) {
            setFavoriteItem(inputFavoriteItem);
            setInputFavoriteItem('');
        }
    }

    const changeInputFavoriteItem = (e: any) => {
        const {value} = e.target;
        setInputFavoriteItem(value);
    }

    console.log('list',list);

    return (
        <div>
            Link list
            {list.map(item => (
                <div>{item}</div>
            ))}
            <Input placeholder="Enter your favorite Link"
                   value={inputFavoriteItem}
                   onKeyPress={handleKeyPress}
                   onChange={changeInputFavoriteItem}
            />
        </div>
    );
}

export default Favorite;