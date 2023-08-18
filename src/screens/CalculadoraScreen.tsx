import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    clean,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNum,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" accion={clean} />
        <BotonCalc text="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc text="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalc text="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" accion={armarNum} />
        <BotonCalc text="8" accion={armarNum} />
        <BotonCalc text="9" accion={armarNum} />
        <BotonCalc text="x" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" accion={armarNum} />
        <BotonCalc text="5" accion={armarNum} />
        <BotonCalc text="6" accion={armarNum} />
        <BotonCalc text="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="3" accion={armarNum} />
        <BotonCalc text="2" accion={armarNum} />
        <BotonCalc text="1" accion={armarNum} />
        <BotonCalc text="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" accion={armarNum} ancho />
        <BotonCalc text="." accion={armarNum} />
        <BotonCalc text="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};
