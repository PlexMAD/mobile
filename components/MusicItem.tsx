import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { Audio } from 'expo-av';
import { mainStyle } from '../styles/style';

interface MusicProp {
    id: number;
    description: string;
    source: any;
}

const MusicItem: React.FC<{ MusicProps: MusicProp }> = ({ MusicProps }) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playSound = async () => {
        try {
            if (sound) {
                await sound.unloadAsync();
                setSound(null);
            }

            const { sound: newSound } = await Audio.Sound.createAsync(MusicProps.source);
            setSound(newSound);
            await newSound.playAsync();
            setIsPlaying(true);

            newSound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded) {
                    if (!status.isPlaying && status.didJustFinish) {
                        setIsPlaying(false);
                        newSound.unloadAsync();
                        setSound(null);
                    }
                }
            });
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    };

    const stopSound = async () => {
        if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync();
            setSound(null);
            setIsPlaying(false);
        }
    };

    return (
        <View style={mainStyle.MusicItem}>
            <Text>{MusicProps.description}</Text>
            <Button
                title={isPlaying ? "Остановить" : "Воспроизвести"}
                onPress={isPlaying ? stopSound : playSound}
            />
        </View>
    );
};

export default MusicItem;
