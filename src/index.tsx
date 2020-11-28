import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
