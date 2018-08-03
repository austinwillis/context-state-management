import React, { Component } from 'react';
import Store from './createStore';

export default class Child2 extends Component {
    render() {
      return <div>
        <Store.FluxConsumer>
          {({ store: { open } }) => open && <p>Hello</p>}
        </Store.FluxConsumer>
      </div>
    }
}