import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './css/global';

const App = () => {
  const buttons_data = ['AC', 'DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.', '/-','=']
  const [ numeroAtual, setNumeroAtual ] = useState("")
  const [ ultimoNumero, setUltimoNumero ] = useState("")

  function handleInput(btn_clicado){
    if (btn_clicado === '*' || btn_clicado === "/" || btn_clicado === "-" || btn_clicado === "+"){
      setNumeroAtual(numeroAtual + " " + btn_clicado + " ")
      return
    }
    if (btn_clicado === 'DEL'){
      setNumeroAtual(numeroAtual.substring(0, numeroAtual.length -1))
      return
    }
    if (btn_clicado === '.'){
      setNumeroAtual(numeroAtual + btn_clicado)
      return
    }
    if (btn_clicado === '+/-') return
    if (btn_clicado === 'AC'){
      setUltimoNumero("")
      setNumeroAtual("")
      return
    }
    if (btn_clicado === '='){
      setUltimoNumero(numeroAtual + ' = ')
      calculator()
      return
    }
    setNumeroAtual(numeroAtual + btn_clicado )
  }

  function calculator(){
    const separarNumeros = numeroAtual.split(' ');
    const operador = separarNumeros[1];

    if (operador === '*') setNumeroAtual((parseFloat(separarNumeros[0]) * parseFloat(separarNumeros[2])))
    if (operador === '/') setNumeroAtual((parseFloat(separarNumeros[0]) / parseFloat(separarNumeros[2])))
    if (operador === '+') setNumeroAtual((parseFloat(separarNumeros[0]) + parseFloat(separarNumeros[2])))
    if (operador === '-') setNumeroAtual((parseFloat(separarNumeros[0]) - parseFloat(separarNumeros[2])))
    if (parseFloat(separarNumeros[0][0]) === parseFloat(separarNumeros[0][2])) setNumeroAtual(1)
    return
  }

  return (
    <View>
      <View style={styles.resultado}>
        <Text style={styles.texto_antigo}>{ultimoNumero}</Text>
        <Text style={styles.resultado_calc}>{numeroAtual}</Text>
      </View>
      <View style={styles.container_botoes}>
        {buttons_data.map((button)=> (
          <TouchableOpacity onPress={()=> handleInput(button)} style={
            button === 'AC' ? [styles.botao,{ backgroundColor: "#f55"}] : button === '=' ? [styles.botao,{ backgroundColor: "#2e3746"}] : styles.botao
          } key={button}>
            <Text style={
               button === 'AC' ? [styles.texto_botao,{ color: '#fff'}] : button === '=' ? [styles.texto_botao,{ color: "#fff"}] : styles.texto_botao
            }>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style='inverted'/>
    </View>
  );
}

export default App;