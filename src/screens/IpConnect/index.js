import React from 'react';

import Provider from './context';
import Screen from './screen';

const IpConnect = props => (
  <Provider {...props}>
    <Screen />
  </Provider>
);

export default IpConnect;
