import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from './src/features/dash/Dashboard';
import { Login } from './src/features/auth/Login';
import { useSelector } from 'react-redux';
import { RootState } from './src/app/store';

function App(): React.JSX.Element {
 const isLoggedIn = useSelector((state: RootState) => state.auth.token !== null);
 const Stack = createNativeStackNavigator();

 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        {isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Register" component={Register} /> */}
          </Stack.Group>
        )}
        {/* Common modal screens */}
        {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Invite" component={Invite} />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
 );
}

export default App;
