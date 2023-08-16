import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.000</Text>
      <Text style={styles.resultado}>1,500.000</Text>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" />
        <BotonCalc text="+/-" color="#9B9B9B" />
        <BotonCalc text="del" color="#9B9B9B" />
        <BotonCalc text="/" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" />
        <BotonCalc text="8" />
        <BotonCalc text="9" />
        <BotonCalc text="x" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" />
        <BotonCalc text="5" />
        <BotonCalc text="6" />
        <BotonCalc text="-" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="3" />
        <BotonCalc text="2" />
        <BotonCalc text="1" />
        <BotonCalc text="+" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" ancho />
        <BotonCalc text="." />
        <BotonCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};
