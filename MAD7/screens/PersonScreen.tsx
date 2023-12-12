import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import MovieList from '../components/movieList';
import { RootParamList } from '../types';

const PersonScreen: React.FC = () => {
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [personDetails, setPersonDetails] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const { params: { personId } } = useRoute();
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        setLoading(true);
        const apiKey = '02221cab5de67332d75ff25ccc44e871';
        const personResponse = await fetch(
          `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}`
        );
        const personData = await personResponse.json();
        setPersonDetails(personData);

        const movieCreditsResponse = await fetch(
          `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}`
        );
        const movieCreditsData = await movieCreditsResponse.json();
        setSimilarMovies(movieCreditsData.cast);
      } catch (error) {
        console.error('Error fetching person details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonDetails();
  }, [personId]);

  const handleMoviePress = (movie: any) => {
    navigation.navigate('Movie', { movieId: movie.id });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <SafeAreaView>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 40, height: 40, marginTop: 50, marginLeft: 30 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU',
                }}
              />
            </TouchableOpacity>
            
            <View style={{ alignItems: 'center' }}>
              <View>
                <Image
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    marginTop: 20,
                    alignContent: 'center',
                    alignItems: 'center',
                    borderWidth: 2,
                    borderColor: 'gray',
                  }}
                  source={{ uri: `https://image.tmdb.org/t/p/w500${personDetails.profile_path}` }}
                />
              </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{personDetails.name}</Text>
              <Text style={{ fontSize: 15, color: 'white' }}>
                {personDetails.place_of_birth}
              </Text>
            </View>

            <View style={styles.details_box}>
              <View style={styles.first_box}>
                <Text style={{ fontSize: 13, color: '#c2c2c2' }}>
                  {personDetails.gender === 2 ? 'Male' : 'Female'}
                </Text>
                <Text style={{ fontSize: 13, color: '#c2c2c2' }}>
                  {personDetails.known_for_department}
                </Text>
              </View>
              <View style={styles.box_line_1} />
              <View style={styles.second_box}>
                <Text style={{ fontSize: 13, color: '#c2c2c2' }}>
                  {personDetails.birthday}
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.bio}>Biography</Text>
              <Text style={styles.bio_data}>{personDetails.biography}</Text>
            </View>

            <ScrollView horizontal>
              <View style={{ width: 700, height: 250, flexDirection: 'row' }}>
                <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} onPress={handleMoviePress}/>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  details_box: {
    width: 320,
    height: 60,
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'white',
  },
  first_box: {
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
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  bio_data: {
    marginLeft: 10,
    marginTop: 10,
    color: 'gray',
  },
});
