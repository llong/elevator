import React, {FC} from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

const Floor: FC<ViewProps> = props => {
  return <View style={[styles.floor, props.style]} />;
};

const styles = StyleSheet.create({
  floor: {
    height: 32,
    width: 24,
    backgroundColor: 'gray',
    margin: 4,
  },
});

export default Floor;
