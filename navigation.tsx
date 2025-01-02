import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Photos from './components/Photos';

const Stack = createNativeStackNavigator();

function NavigateStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="Photos" component={Photos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavigateStack;