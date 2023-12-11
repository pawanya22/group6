import React, { useState, useEffect } from 'react';
import { View, Text, Platform, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'; // Import axios for API calls
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovie';
import MovieList from '../components/movieList';
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator();

const ios = Platform.OS === 'ios';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [trending, setTrending] = useState<number[]>([]);
  const [upcoming, setUpcoming] = useState<number[]>([]);
  const [topRated, setTopRated] = useState<number[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const apiKey = '02221cab5de67332d75ff25ccc44e871';
    const baseUrl = 'https://api.themoviedb.org/3/movie';

    // Fetch top-rated movies
    axios
      .get(`${baseUrl}/top_rated?api_key=${apiKey}`)
      .then((response) => setTopRated(response.data.results))
      .catch((error) => console.error('Error fetching top-rated movies:', error));

    // Fetch upcoming movies
    axios
      .get(`${baseUrl}/upcoming?api_key=${apiKey}`)
      .then((response) => setUpcoming(response.data.results))
      .catch((error) => console.error('Error fetching upcoming movies:', error));

    // Fetch popular movies (you can replace this with the trending endpoint)
    axios
      .get(`${baseUrl}/popular?api_key=${apiKey}`)
      .then((response) => setTrending(response.data.results))
      .catch((error) => console.error('Error fetching popular movies:', error));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* ... (existing code) */}
      <SafeAreaView style={ios ? { marginBottom: -2 } : { marginBottom: 3 }}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 140 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 29, color: 'white' }}>
            <Text style={styles.text}>CINE</Text>app
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 50, marginTop:2 }}>Search</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        <TrendingMovies data={trending} />
        <MovieList title="Upcoming" data={upcoming} hideSeeAll={false} />
        <MovieList title="Top Rated" data={topRated} hideSeeAll={false} />
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
