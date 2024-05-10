import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FormField {
  name: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
 }
 
 interface FormProps {
  fields: FormField[];
  onSubmit: () => void;
 }

 const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  return (
     <View style={styles.container}>
       {fields.map((field, index) => (
         <TextInput
           key={index}
           style={styles.input}
           placeholder={field.placeholder}
           value={field.value}
           onChangeText={field.onChangeText}
         />
       ))}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    padding: 20,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
 },
 button: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
 },
 buttonText: {
    color: 'white',
 },
});

export default Form;
