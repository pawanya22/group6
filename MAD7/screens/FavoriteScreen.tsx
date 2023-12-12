import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch the list of favorite movies from storage when the component mounts
    const fetchFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          const favoritesArray = JSON.parse(storedFavorites);
          setFavorites(favoritesArray);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  const navigateToMovieScreen = (movieId: string) => {
    // Navigate to the MovieScreen with the selected movieId
    navigation.navigate('Movie', { movieId });
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ margin: 4, marginTop: 50, flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10, color: 'white' }}>
          Favorites
        </Text>
        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity key={item.id} style={{ marginBottom: 20 }} onPress={() => navigateToMovieScreen(item.id)}>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height * 0.3,
                    borderRadius: 15,
                  }}
                />
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>
                  {item.title}
                </Text>
                {/* Add more details as needed */}
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text style={{ textAlign: 'center', color: 'white' }}>No favorites yet.</Text>
        )}
        {/* Button to navigate to the Home screen */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            borderRadius: 999,
            padding: 10,
            margin: 10,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* You can replace the image source with your actual image URL */}
          <Image
            style={{ width: 40, height: 40, marginRight: 10 }}
            source={{
              uri: 'https://www.example.com/your-image.png',
            }}
          />
          <Text style={{ fontWeight: 'bold', color: 'black' }}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
