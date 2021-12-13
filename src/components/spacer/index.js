import React from 'react';
import {View} from 'react-native';

import {theme} from '../../utils/style';

const Spacer = props => (
  <View
    style={
      props.fixedSize
        ? {[props.horizontal ? 'width' : 'height']: theme.spacing(props.size)}
        : [
            {flex: theme.spacing(props.size)},
            props.setMinSize && {
              [props.horizontal ? 'minWidth' : 'minHeight']: theme.spacing(
                props.size,
              ),
            },
          ]
    }
  />
);

export default Spacer;
