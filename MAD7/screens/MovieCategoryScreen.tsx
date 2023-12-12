import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../types';

interface MovieCategoryScreenProps {
  navigation: NavigationProp<RootParamList>;
  route: { params: { category: string } };
}

const MovieCategoryScreen: React.FC<MovieCategoryScreenProps> = ({ route }) => {
  const { category } = route.params;
  const [moviesInCategory, setMoviesInCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesInCategory = async () => {
      try {
        setLoading(true);
        // Fetch your movies in the specified category data
        // Replace the following URL with your actual API endpoint
        const response = await fetch(`https://api.example.com/movies?category=${category}`);
        const data = await response.json();
        setMoviesInCategory(data);
      } catch (error) {
        console.error('Error fetching movies in category:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesInCategory();
  }, [category]);

  const handleMoviePress = (movieId: string) => {
    // Navigate to the MovieScreen with the selected movieId
    navigation.navigate('Movie', { movieId });
  };

  return (
    <View style={{ backgroundColor: 'black', flex: 1, padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        {category} Movies
      </Text>
      {loading && <Text style={{ color: 'white' }}>Loading...</Text>}
      {!loading && moviesInCategory.length === 0 && (
        <Text style={{ color: 'white' }}>No movies available in this category</Text>
      )}
      {!loading && moviesInCategory.length > 0 && (
        <FlatList
          data={moviesInCategory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMoviePress(item.id)}>
              <View
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: 'darkgray',
                  borderRadius: 10,
                }}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={{ width: 100, height: 150, borderRadius: 5 }}
                />
                <Text style={{ color: 'white', marginTop: 5 }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default MovieCategoryScreen;
