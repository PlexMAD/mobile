import { Text, View, FlatList, Button, Alert } from 'react-native';
import { mainStyle } from '../styles/style';
import React, { useState } from 'react';
import PhotoItem from './PhotoItem';
import Images from '../assets/Images';
import * as ImagePicker from 'expo-image-picker';


const Photos: React.FC = () => {
    const [photos, setPhotos] = useState(Images);

    const addPhoto = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert('Разрешение необходимо', 'Вы должны предоставить доступ к галерее.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled) {
            const newPhoto = {
                id: photos.length + 1,
                description: `Пользовательское изображение ${photos.length + 1}`,
                source: { uri: result.assets[0].uri },
            };
            setPhotos([...photos, newPhoto]);
        } else {
            Alert.alert('Отмена', 'Выбор изображения был отменен.');
        }
    };


    return (
        <View style={mainStyle.main}>
            <View>
                <Text style={mainStyle.title}>Фотографии</Text>
            </View>
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PhotoItem PhotoProps={item} />}
            />
            <Button title="Добавить фото" onPress={addPhoto} />
        </View>
    );
};

export default Photos;
