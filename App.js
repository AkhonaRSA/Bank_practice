import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';



const PlaceholderImage = require("./assets/background-image.png");

export default function App() {

//embedding a function inside a variable. 
const pickImageAsyc = async ()=>{
 let result = await ImagePicker.launchImageLibraryAsync({
  allowsEditing : true,
  quality: 1,
 });

 if(!result.canceled){
  console.log(result)
 }else{
  alert('You did not select any image');
 }
};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsyc} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

});
