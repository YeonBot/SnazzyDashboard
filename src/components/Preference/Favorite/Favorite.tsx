import React, {useState} from 'react';
import {Input} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

type Props = {
    list: Array<string>,
    setFavoriteItem: (favoriteItem: string) => void,
    deleteFavoriteItem:(favoriteItem: string) => void,
};

function Favorite({list, setFavoriteItem,deleteFavoriteItem}: Props) {

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

    return (
        <div>
            Link list
            {list.map(item => (
                <div>{item}<FontAwesomeIcon icon={faTimes} onClick={() => deleteFavoriteItem(item)}/></div>
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