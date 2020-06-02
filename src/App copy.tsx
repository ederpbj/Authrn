import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// FC -> Function component
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View >
        <Text>Texto App</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;