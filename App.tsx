import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import NavigateStack from './navigation';

const loadFonts = async () => {
  await Font.loadAsync({
    Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const prepareResources = async () => {
      try {
        await loadFonts();
      } catch (error) {
        console.warn('Error loading resources:', error);
      } finally {
        setIsFontLoaded(true);
      }
    };

    prepareResources();
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return <NavigateStack />;
}
