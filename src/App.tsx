import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Elevator from './components/Elevator';

const App = () => {
  const [elevators, setElevators] = React.useState<string[][]>([
    ['x', 'o', 'o', 'o', 'o'],
    ['x', 'o', 'o', 'o', 'o'],
    ['x', 'o', 'o', 'o', 'o'],
  ]);
  const [elevatorIntervalInput, setElevatorIntervalInput] =
    React.useState<string>('1000');
  const [elevatorInterval, setElevatorInterval] = React.useState<number>(
    parseInt(elevatorIntervalInput),
  );

  React.useEffect(() => {
    const interval = setInterval(moveElevators, elevatorInterval);

    return () => clearInterval(interval);
  }, [elevators, elevatorInterval]);

  const moveElevators = () => {
    const newElevators: string[][] = [];
    elevators.map(elevator => {
      const newFloors: string[] = [];
      const activeFloor = Math.floor(Math.random() * 4);
      elevator.map((floor, index) => {
        newFloors.push(index === activeFloor ? 'x' : 'o');
      });
      newElevators.push(newFloors);
    });
    setElevators(newElevators);
  };

  return (
    <View style={styles.container}>
      <View style={styles.building}>
        {elevators.map((elevator, index) => (
          <Elevator key={index} elevator={elevator} />
        ))}
      </View>
      <TextInput
        value={elevatorIntervalInput}
        placeholder="Set Interval"
        onChangeText={value => setElevatorIntervalInput(value)}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setElevatorInterval(parseInt(elevatorIntervalInput))}>
        <Text>Set Interval</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'navy',
  },
  building: {
    flexDirection: 'row',
    backgroundColor: '#222',
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 100,
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'yellow',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
});

export default App;
