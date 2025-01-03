import { Text, View, FlatList, Button, Alert } from 'react-native';
import { mainStyle } from '../styles/style';
import React, { useState } from 'react';
import MusicList from '../assets/MusicList';
import MusicItem from './MusicItem';



const Music: React.FC = () => {
    return (
        <View style={mainStyle.main}>
            <View>
                <Text style={mainStyle.title}>Фотографии</Text>
            </View>
            <FlatList
                data={MusicList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MusicItem MusicProps={item} />}
            />
        </View>
    );
};

export default Music;
