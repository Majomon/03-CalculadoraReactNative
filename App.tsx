import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <CalculadoraScreen />
      <StatusBar backgroundColor="black" />
    </SafeAreaView>
  );
};

export default App;
