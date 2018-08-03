import React, { Component } from 'react';
import Store from './createStore';
import { open } from './actions';

export default class Child extends Component {
    render() {
      return <div>
        <Store.FluxConsumer>
          {({ dispatch }) => <button onClick={dispatch(open)}>Toggle</button>}
        </Store.FluxConsumer>
      </div>
    }
}