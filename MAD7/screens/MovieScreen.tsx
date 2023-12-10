import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import Cast from '../components/cast';
import MovieList from '../components/movieList';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

interface MovieScreenProps {}

const MovieScreen: React.FC<MovieScreenProps> = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  let movieName = 'Ant-Man and the Wasp: Quantumania';


  useEffect(() => {}, [item]);
/*<LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23, 1)']}
            style={{ width, height: height * 0.40, position: 'absolute', bottom: 0 }}
          />*/
  return (
    <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: 'black' }}>
          
        <View style={{ width: '100%' }}>
          <View>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU'}} style={{ width, height: height * 0.55 }} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
              <Image style={{ width: 40, height: 40 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU'}} />
            </TouchableOpacity>
          </View>
        </View>
        

      <View style={{ marginTop: -(height * 0.09), marginBottom: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 24, fontWeight: 'bold', letterSpacing: 2, marginBottom: 10 }}>
          {movieName}
        </Text>
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 14, textAlign: 'center', marginBottom: 2 }}>
          Released: 2020 - 170 min
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 4, marginVertical: 2 }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 14, textAlign: 'center', marginRight: 10 }}>
            Action:
          </Text>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 14, textAlign: 'center', marginRight: 10 }}>
            Thrill:
          </Text>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 14, textAlign: 'center' }}>
            Comedy:
          </Text>
        </View>
        <Text style={{ color: 'grey', marginHorizontal: 4, letterSpacing: 1, lineHeight: 20 }}>
          dwcdknjjjjjjjjjjjc ks skddwejnw efijfnivenviek dwodwnocjcnivbsew ewkfjenvievnein dwocnjskcns dkwnfere
          dowjocdnsvonjv wjncsnej wdownedwd edwjncd fe kdbif dckdnfe ebdwkjcdndoij nwod dfofe jdnwuwoedn sacjnsic ewidwbicwiecnu wdiewiwheuw edwjdnd wd wd wde gt ytgr effewf g t ytrg rrefegerre ge rrhr g grg rgrtgrgrthr e fegegrer  dbdveivhb fwifbw efejw fwf wne fwef wegrege egre ge rfwrr fregegegr  e gegrg egregwef wf wfe regrth h rge g trgregt  e e w efw\f wfwg erg 
        </Text>
      </View>

      <Cast navigation={navigation} cast={cast} />

      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  );
};

export default MovieScreen;
