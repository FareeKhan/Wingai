import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title}) => {
  return (
    <TouchableOpacity
    style={[ styles.buttonClose]}
>
    <Text style={styles.textStyle}>{title}</Text>
</TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonClose: {
        backgroundColor: '#212121',
        paddingVertical:19,
        borderRadius:25
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})