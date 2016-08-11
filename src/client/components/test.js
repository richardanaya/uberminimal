import React from 'react';
import {connect} from "../store";
import {changeMessage} from '../actions';

function app(props){
    var {holder} = props;
    return (
        <div>
            <button onClick={()=>changeMessage(holder)}>Do Something</button>
            {holder.message}
        </div>
    )
}

export default connect(app,["holder"]);