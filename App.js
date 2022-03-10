import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const { width } = Dimensions.get('screen');
import { EvilIcons } from '@expo/vector-icons';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';

const DATA = [
  {
    key: '00',
    image:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
  {
    key: '01',
    image:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
  },
  {
    key: '02',
    image:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
  },
  {
    key: '3',
    image:
    'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
  },
  {
    key: '04',
    image:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  },
  {
    key: '05',
    image:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  },
  {
    key: '06',
    image:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  },
];


export default function App() {

  function hitIt(){
    console.log("Clicked")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>

      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        renderItem={({item}) => {
          return (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'gray', paddingTop: 70, paddingBottom: 70, marginRight: 120, marginLeft:120, borderRadius: 20}} onClick={{hitIt}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{paddingBottom: 50, fontSize: 35, fontWeight: 'bold'}}>Objective</Text>
              </View>
              <Image
                source={{uri: item.image}} 
                style={{
                  width: width * .7,
                  height: width * .7,
                  resizeMode: 'contain',
                }} 
              />
            </View>
          </View>
          );
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
