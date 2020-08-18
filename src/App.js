import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from './containers/RootContainer';

import configureStore from './store/configureStore';

import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <RootContainer />
    </Provider>
  );
}

export default App;
