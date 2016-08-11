import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/app"
import "./styles/app.less"
import {update} from "./store";

// Let's get the frozen data stored
function render(){
    ReactDOM.render(
        <App></App>,
        document.getElementById('app')
    )
}

update(function( currentState, prevState ){
    render();
});

render();


