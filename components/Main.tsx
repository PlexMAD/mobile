import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { mainStyle } from '../styles/style';
import React from 'react';

const Main: React.FC<any> = ({ navigation }) => {
    const loadScene = (scene: string) => {
        navigation.navigate(scene);
    };

    return (
        <View style={mainStyle.main}>
            <Text>Главная</Text>
            <TouchableOpacity
                onPress={() => loadScene('Photos')}
            >
                <Text >Страница фотографий</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Main;
