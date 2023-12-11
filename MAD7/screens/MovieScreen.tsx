import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute, NavigationProp } from '@react-navigation/native';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import { RootParamList } from '../types';

var { width, height } = Dimensions.get('window');

interface MovieScreenProps {
  navigation: NavigationProp<RootParamList>;
}

const MovieScreen: React.FC<MovieScreenProps> = ({ navigation }) => {
  const { params: item } = useRoute();
  const [cast, setCast] = useState<any[]>([]);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [movieDetails, setMovieDetails] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const apiKey = '02221cab5de67332d75ff25ccc44e871';
        const movieId = '123';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovieDetails(data);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        const creditsData = await creditsResponse.json();
        setCast(creditsData.cast);

        const similarMoviesResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`
        );
        const similarMoviesData = await similarMoviesResponse.json();
        setSimilarMovies(similarMoviesData.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: 'black' }}
    >
      <View style={{ width: '100%' }}>
        <View>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }}
            style={{ width, height: height * 0.55 }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: -(height * 0.09), marginBottom: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 24, fontWeight: 'bold', letterSpacing: 2, marginBottom: 10 }}>
          {movieDetails.title}
        </Text>
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 14, textAlign: 'center', marginBottom: 2 }}>
          Released: {movieDetails.release_date} - {movieDetails.runtime} min
        </Text>

        {/* Add your additional movie details here */}

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 4, marginVertical: 2 }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 14, textAlign: 'center', marginRight: 10 }}>
            Genre: {movieDetails.genres && movieDetails.genres.map((genre: any) => genre.name).join(', ')}
          </Text>
          {/* Add more details as needed */}
        </View>

        <Text style={{ color: 'grey', marginHorizontal: 4, letterSpacing: 1, lineHeight: 20 }}>
          {movieDetails.overview}
        </Text>
      </View>

      <Cast navigation={navigation} cast={cast} />

      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  );
};

export default MovieScreen;
