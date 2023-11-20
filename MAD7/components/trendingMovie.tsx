import React from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'; // Import Image
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

interface TrendingMoviesProps {
  data: any[]; // Replace 'any[]' with the actual type of your data
}

const TrendingMovies: React.FC<TrendingMoviesProps> = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = (item: any) => {
    navigation.navigate('Movie', item);
  };

  const MovieCard: React.FC<{ item: any }> = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        {/* Use a regular Image component for testing */}
        {/* Replace this with ParallaxImage once you verify it's working */}
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU' }}
          style={{
            width: Dimensions.get('window').width * 0.6,
            height: Dimensions.get('window').height * 0.5,
            borderRadius: 16,
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ color: 'white', fontSize: 18, marginLeft: 16, marginBottom: 5 }}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

export default TrendingMovies;
