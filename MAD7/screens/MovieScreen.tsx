import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute, NavigationProp } from '@react-navigation/native';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import { RootParamList } from '../types';

var { width, height } = Dimensions.get('window');

interface MovieScreenProps {
  navigation: NavigationProp<RootParamList>;
  route: { params: { movieId: string } };
}

const MovieScreen: React.FC<MovieScreenProps> = ({ route }) => {
  const { params: item } = useRoute();
  const [cast, setCast] = useState<any[]>([]);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [movieDetails, setMovieDetails] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { movieId } = route.params;
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const apiKey = '02221cab5de67332d75ff25ccc44e871';
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
  }, [movieId]);

  useEffect(() => {
    // Check if the movie is in favorites when the component mounts
    const checkFavoriteStatus = async () => {
      try {
        const favorites = await AsyncStorage.getItem('favorites');
        const favoritesArray = favorites ? JSON.parse(favorites) : [];

        const isFavorite = favoritesArray.some((fav: any) => fav.id === movieDetails.id);
        setIsFavorite(isFavorite);
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };

    checkFavoriteStatus();
  }, [movieDetails.id]);

  const handleSimilarMoviePress = (movie: any) => {
    navigation.navigate('Movie', { movieId: movie.id });
  };

  const handlePersonPress = (person: any) => {
    navigation.navigate('Person', { personId: person.id });
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      const favoritesArray = favorites ? JSON.parse(favorites) : [];

      if (isFavorite) {
        const updatedFavorites = favoritesArray.filter((fav: any) => fav.id !== movieDetails.id);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      } else {
        const updatedFavorites = [...favoritesArray, movieDetails];
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite status:', error);
    }
  };

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
            style={{ position: 'absolute', top: 40, left:10, zIndex: 1 }}
          >
            <Image
              style={{ width: 80, height: 40 }}
              source={require('../assets/pic/56.webp')}
            />
          </TouchableOpacity>
          {/* Add a button to toggle favorite status */}
          <TouchableOpacity onPress={toggleFavorite} style={{ position: 'absolute', top: 50, right: 20, zIndex: 1 }}>
            {isFavorite ? 
            <Image
              style={{ width: 40, height: 40 }}
              source={require('../assets/pic/redheart.png')}
            />: 
            <Image
              style={{ width: 40, height: 40 }}
              source={require('../assets/pic/bheart.png')}
            />
            }
            
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

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 4, marginVertical: 2 }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 14, textAlign: 'center', marginRight: 10 }}>
            Genre: {movieDetails.genres && movieDetails.genres.map((genre: any) => genre.name).join(', ')}
          </Text>
        </View>

        <Text style={{ color: 'grey', marginHorizontal: 4, letterSpacing: 1, lineHeight: 20 }}>
          {movieDetails.overview}
        </Text>
      </View>
      
      <Cast cast={cast} onPress={handlePersonPress} navigation={navigation} />

      <MovieList title="Similar Movies" hideSeeAll={false} data={similarMovies} onPress={handleSimilarMoviePress}/>

      {/* Rest of your code remains unchanged */}
      {/* ... */}
    </ScrollView>
  );
};

export default MovieScreen;
