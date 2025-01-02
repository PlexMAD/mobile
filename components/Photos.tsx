import { Text, View, FlatList } from 'react-native';
import { mainStyle } from '../styles/style';
import React from 'react';
import PhotoItem from './PhotoItem';
import Images from '../assets/Images';

const Photos: React.FC = () => {
    return (
        <View style={mainStyle.main}>
            <View>
                <Text style={mainStyle.title}>Фотографии</Text>
            </View>
            <FlatList
                data={Images}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PhotoItem PhotoProps={item} />}
            />
        </View>
    );
};

export default Photos;
