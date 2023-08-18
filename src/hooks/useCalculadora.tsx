import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const clean = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNum = (numeroTexto: string) => {
    //No acepta doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //Si hay otro cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        //Si es diferente de cero y no tiene punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        //Evitar 00000.
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numTemporal = numero;

    if (numero.includes('-')) {
      negativo = '-';
      numTemporal = numero.substring(1); // Le quito la primera posición
    }

    if (numTemporal.length === 1) {
      setNumero('0');
    } else {
      setNumero(negativo + numTemporal.slice(0, -1));
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    //Transformo los string en number
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    if (num1 && num2) {
      switch (ultimaOperacion.current) {
        case Operadores.sumar:
          setNumero(`${num1 + num2}`);
          break;
        case Operadores.restar:
          setNumero(`${num2 - num1}`);
          break;
        case Operadores.multiplicar:
          setNumero(`${num1 * num2}`);
          break;
        case Operadores.dividir:
          setNumero(`${num2 / num1}`);
      }
      setNumeroAnterior('0');
    } else {
      setNumeroAnterior('0');
    }
  };

  return {
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
  };
};
