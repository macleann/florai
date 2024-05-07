import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define a type for the route parameters
type RootStackParamList = {
 Login: undefined; // 'undefined' means this screen doesn't expect any parameters
 Dashboard: undefined; // Same as above
};

// Use the StackNavigationProp type to type the navigation prop
type DashboardScreenNavigationProp = NativeStackNavigationProp<
 RootStackParamList,
 'Dashboard'
>;

type Props = {
 navigation: DashboardScreenNavigationProp;
};

export const Dashboard = ({ navigation }: Props): React.JSX.Element => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}
