import React, { Component } from 'react';
import Store from './createStore';
import { updateText } from './actions';

export default class Child3 extends Component {
    render() {
        return <div>
            <Store.FluxConsumer>
                {({ dispatch, store: { text }}) => (
                    <div>
                        <input value={text} onChange={dispatch(updateText)} />
                    </div>
                )}
            </Store.FluxConsumer>
        </div>
    }
}