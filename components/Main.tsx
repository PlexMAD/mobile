import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { mainStyle } from '../styles/style';
import React from 'react';

const Main: React.FC<any> = ({ navigation }) => {
    const loadScene = (scene: string) => {
        navigation.navigate(scene);
    };

    return (
        <View style={mainStyle.main}>
            <Text style={mainStyle.title}>Главная</Text>
            <View style={mainStyle.mainMenu}>
                <TouchableOpacity style={mainStyle.menuItem}
                    onPress={() => loadScene('Photos')}
                >
                    <Text style={mainStyle.title} > Страница фотографий</Text>
                </TouchableOpacity>
                <TouchableOpacity style={mainStyle.menuItem}
                    onPress={() => loadScene('Music')}
                >
                    <Text style={mainStyle.title}>Страница музыки</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default Main;
