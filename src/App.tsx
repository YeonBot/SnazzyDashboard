import React from 'react';
import Button from '@material-ui/core/Button';

import {getTree} from './chromeAPI/bookmark';

import './App.css';

function App() {

    const getBookmark = () => {
        getTree().then(tree => {
            console.log(tree);

        });
    }

    return (
        <div className="App">
            <div className="App-header">
                <Button variant="contained" color="primary" onClick={getBookmark}>
                    Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
