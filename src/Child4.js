import React, { Component } from 'react';
import Store from './createStore';
import { getData, loadData } from './actions';

export default class Child extends Component {
  render() {
    return <div>
      <Store.FluxConsumer>
        {({ dispatch, store: { data, loadingData } }) => <React.Fragment>
            {loadingData && <h3>Loading...</h3>}
            {data.length > 0 && <ol>
              {data.map(i => <li key={i}>{i}</li>)}
            </ol>}
            <button onClick={dispatch(getData)}>Get Data</button>
        </React.Fragment>}
      </Store.FluxConsumer>
    </div>
  }
}