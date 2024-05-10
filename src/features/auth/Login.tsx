import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../../components/Form';
import { useAppDispatch } from '../../app/hooks';
import { login } from './authSlice';

export const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const dispatch = useAppDispatch();

 const fields = [
    { name: 'username', placeholder: 'Username', value: username, onChangeText: setUsername },
    { name: 'password', placeholder: 'Password', value: password, onChangeText: setPassword },
 ];

 const handleSubmit = () => {
    dispatch(login({ username, password }));
 };

 return (
    <View style={styles.container}>
      <Form fields={fields} onSubmit={handleSubmit} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
 },
});
