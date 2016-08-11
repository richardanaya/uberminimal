import Freezer from 'freezer-js';
import React from 'react';

var freezer = new Freezer({
    holder : {
        message: "hey"
    }
});

export function update(callback){
    freezer.on('update', callback);
}

export function connect(Component,domains){
    return function( props ){
        var newProps = {};
        domains.forEach( d => {
            newProps[d] = freezer.get()[d];
        });

        return <Component { ...props } { ...newProps } />;
    }
}