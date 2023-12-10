import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { Image } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { fetchPersonDetails, fetchPersonMovies } from '../../api/moviedb';

const Actor: React.FC = () => {
  const [personDetails, setPersonDetails] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = '02221cab5de67332d75ff25ccc44e871';
    const personId = 110; // Replace with the desired person's ID
    const apiUrl = `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setPersonDetails(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching person details:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <TouchableOpacity /*onPress={()=>Navigation.goBack()}*/>
            <Image style={{ width: 40, height: 40, marginTop: 10, marginLeft: 300 }} source={require('../../assest/images/white-back-icon-5.jpg')} />
          </TouchableOpacity>

          {/*preson details*/}

          <View style={{ alignItems: 'center' }}>
            <View>
              <Image style={{ width: 200, height: 200, borderRadius: 100, marginTop: 50, alignContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#ffffff' }} source={{ uri: `https://image.tmdb.org/t/p/w500${personDetails.profile_path}` }} />
            </View>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 30 }} >{personDetails.name}</Text>
            <Text>Echuca, Victoria, Australia</Text>
          </View>

          <View style={styles.details_box}>
            <View style={styles.frist_box}>
              <Text>Actor</Text>
              <Text>male</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={styles.second_box}>
              <Text>Birthday</Text>
              <Text>2001.11.30</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>Know for</Text>
              <Text>acting</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>popularity</Text>
              <Text>20-30</Text>
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
            <Text style={styles.similar}>Similar movie</Text>
          </View>

          <ScrollView horizontal>
            <View style={{ width: 700, height: 200, flexDirection: 'row', marginTop: 10 }}>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details_box: {
    width: 320,
    height: 60,
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  frist_box: {
    marginLeft: 13,
    justifyContent: 'center',
  },
  box_line_1: {
    backgroundColor: '#ffffff',
    width: 2,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  second_box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bio: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },
  bio_data: {
    marginLeft: 10,
    marginTop: 10,
  },
  similar: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },
});

export default Actor;
