import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import TrendingMovies from '../components/trendingMovie';
import MovieList from '../components/movieList';
import SearchScreen from './SearchScreen';
import { NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../types';
import { styles } from '../theme';


const Stack = createNativeStackNavigator();
const ios = Platform.OS === 'ios';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const [trending, setTrending] = useState<number[]>([]);
  const [upcoming, setUpcoming] = useState<number[]>([]);
  const [topRated, setTopRated] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = '02221cab5de67332d75ff25ccc44e871';
    const baseUrl = 'https://api.themoviedb.org/3/movie';

    axios
      .get(`${baseUrl}/top_rated?api_key=${apiKey}`)
      .then((response) => setTopRated(response.data.results))
      .catch((error) => console.error('Error fetching top-rated movies:', error));

    axios
      .get(`${baseUrl}/upcoming?api_key=${apiKey}`)
      .then((response) => setUpcoming(response.data.results))
      .catch((error) => console.error('Error fetching upcoming movies:', error));

    axios
      .get(`${baseUrl}/popular?api_key=${apiKey}`)
      .then((response) => setTrending(response.data.results))
      .catch((error) => console.error('Error fetching popular movies:', error));
  }, []);

  const handleMoviePress = (movie: any) => {
    navigation.navigate('Movie', { movieId: movie.id });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <SafeAreaView style={ios ? { marginBottom: -2 } : { marginBottom: 3 }}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 50 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={{ color: 'white', fontSize: 18, marginRight: 50, marginTop: 2 }}>Profile</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', fontSize: 29, color: 'white' }}>
            <Text style={styles.text}>CINE</Text>app
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 50, marginTop: 2 }}>Search</Text>
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        <TrendingMovies data={trending} onPress={handleMoviePress} />
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16, marginTop: 16 }}>Upcoming Movies</Text>
        <MovieList data={upcoming} onPress={handleMoviePress} title={''} hideSeeAll={false} />

        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16, marginTop: 16 }}>Top Rated Movies</Text>
        <MovieList data={topRated} onPress={handleMoviePress} title={''} hideSeeAll={false} />
      </ScrollView>
    </View>
  );
};

export default function HomeScreenWithStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
    </Stack.Navigator>
  );
}