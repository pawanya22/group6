// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, Platform, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovie';
import MovieList from '../components/movieList';
import SearchScreen from './SearchScreen';


const Stack = createNativeStackNavigator();

const ios = Platform.OS === 'ios';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <SafeAreaView style={ios ? { marginBottom: -2 } : { marginBottom: 3 }}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 140 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>
            <Text style={styles.text}>CINE</Text>app
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 50, marginTop:2 }}>Search</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        <TrendingMovies data={trending} />

        <MovieList title="upcoming" data={upcoming} />

        <MovieList title="Top Rated" data={topRated} />
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
