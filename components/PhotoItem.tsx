import { Text, View, Image } from 'react-native';
import React from 'react';
import { mainStyle } from '../styles/style';

interface PhotoProp {
    id: number;
    description: string;
    source: any;
}

const PhotoItem: React.FC<{ PhotoProps: PhotoProp }> = ({ PhotoProps }) => {
    return (
        <View style={mainStyle.PhotoItem} >
            <Image source={PhotoProps.source} style={{ width: 100, height: 100, alignSelf: 'center' }} />
            <Text style={mainStyle.photoDesc}>{PhotoProps.description}</Text>
        </View>
    );
};

export default PhotoItem;
