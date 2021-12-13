import React from 'react';
import {  Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  background?: string;
}

export function CommonButton({title, ...rest} : ButtonProps){
  return(
    <TouchableOpacity
    style={styles.Commonbutton} 
    activeOpacity={0.75} 
    {...rest}
    > 
      <Text style={styles.textCommonButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export function ButtonGame({title, background, ...rest} : ButtonProps){
  return(
    <TouchableOpacity
    style={[styles.Commonbutton, {backgroundColor: background}]} 
    activeOpacity={0.75} 
    {...rest}
    > 
      <Text style={styles.textGameButton}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Commonbutton:{
    backgroundColor: '#ffc133',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  textCommonButton:{
    color:'#30287b',
    fontWeight: 'bold',
    fontSize: 17,
  },
  textGameButton:{
    color:'#FFF',
    fontWeight: 'bold',
    fontSize: 17,
  }
})
