import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableHighlight } from 'react-native';

export default function App() {
  const a = '1'
  const handlePressNoob = () => {
    console.log(a)
  }
  const handlePressAlert = () => Alert.alert("kys", "wow", [
    {
      text: "heh", onPress: () => console.log("heh")
    },
    {
      text: "heeeeh", onPress: () => console.log("wrong heh")
    }])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Яндекс еда</Text>
      <Button title="бро" color="red" onPress={handlePressAlert} />
      <TouchableHighlight onPress={handlePressAlert}>
        <Image source={{
          uri: "https://sun9-40.userapi.com/impg/J1Fh3QoRQ7ul_7sAVSyuLr-eudDBWkvb9JwYGA/GqQ2DgrIOLY.jpg?size=1050x720&quality=96&sign=dcd8d50ebb8696c1e07e2456a858d36b&type=album",
          width: 410,
          height: 300,
        }}/>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    letterSpacing: 5
  }
});
