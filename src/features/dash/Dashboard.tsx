import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../auth/authSlice';
import { AppDispatch } from '../../app/store';

export const Dashboard = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = async () => {
        try {
            await dispatch(logout());
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};