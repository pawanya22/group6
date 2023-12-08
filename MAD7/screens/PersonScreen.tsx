import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
//import { Image } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import MovieList from '../components/movieList';


var { width, height } = Dimensions.get('window')

interface PersonScreen {}

const PersonScreen = () => {
    const navigation = useNavigation();
 // const[personMovies,setPersonMovies]=useState {[1,2,3,4]}
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
    let movieName = 'Ant-Man and the Wasp: Quantumania';


  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
    <ScrollView>
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image style={{ width: 40, height: 40, marginTop: 50, marginLeft: 30 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU'}} />
          </TouchableOpacity>

          {/*preson details*/}

          <View style={{ alignItems: 'center',/* shadowColor: 'white', shadowRadius: 40, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 1 */ }}>
            <View>
              <Image style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20, alignContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'gray' }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU'}} />
            </View>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 30, color: 'white' }} >Travis Fimmel</Text>
            <Text style={{ fontSize: 15, color: 'white' }}>Echuca, Victoria, Australia</Text>
          </View>

          <View style={styles.details_box}>
            <View style={styles.frist_box}>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>Actor</Text>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>male</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={styles.second_box}>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>Birthday</Text>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>2001.11.30</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={{justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>Know for</Text>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>Acting</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={{justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>popiularity</Text>
              <Text style={{ fontSize: 13, color: '#c2c2c2' }}>20-30</Text>
            </View>
          </View>

          <View>
            <Text style={styles.bio}>Biography</Text>
            <Text style={styles.bio_data}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
              animi a non itaque modi quas corrupti tempore inventore fuga!
              Voluptate illum laboriosam pariatur consequuntur neque quisquam
              deserunt porro sequi, eos modi ad dolores ipsa inventore vero, quos
              deleniti? Eaque saepe, sequi ratione hic cupiditate asperiores culpa
              modi cum nobis dolor.
            </Text>
          </View>

          <ScrollView horizontal>
            <View style={{ width: 700, height: 250, flexDirection: 'row' }}>
              <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  </View>

  )
}

export default PersonScreen;

const styles = StyleSheet.create({
  details_box: {
    width: 320,
    height: 60,
    //backgroundColor: '#1607ba',
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 10,
    borderWidth:1,
    borderColor:'gray',
    color: 'white',
  },
  frist_box: {
    marginLeft: 13,
    justifyContent: 'center',
    color: 'white',
  },
  box_line_1: {
    backgroundColor: 'gray',
    width: 2,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  second_box: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

  bio: {
    marginTop: 10,
    marginLeft:10,
    fontSize:20,
    color: 'white',
  },
  bio_data: {
    marginLeft: 10,
    marginTop: 10,
    color: 'gray',
  },
 
})