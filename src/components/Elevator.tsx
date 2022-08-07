import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import Floor from './Floor';

interface IElevator {
  elevator: string[];
}

const Elevator: FC<IElevator> = ({elevator}) => {
  return (
    <View style={styles.elevator}>
      {elevator.map((floor: string, index: number) => (
        <Floor key={index} style={floor === 'x' ? styles.active : null} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  elevator: {
    backgroundColor: '#444',
    margin: 4,
    flexDirection: 'column-reverse',
  },
  active: {
    backgroundColor: 'yellow',
  },
});

export default Elevator;
