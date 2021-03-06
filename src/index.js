import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from 'redux'
import {Provider} from "react-redux";
import rootReducer from "./modules";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

/*
store에 미들웨어를 적용할 때 applyMiddleware 함수를 사용한다.
 */
const store = createStore(
    rootReducer,
    composeWithDevTools(
        // logger를 사용하는 경우, logger 는 항상 맨 마지막에 있어야 한다
        applyMiddleware(
            ReduxThunk,
            logger
        )
    )
)
// console.log(store.getState()); // Check Store state

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
