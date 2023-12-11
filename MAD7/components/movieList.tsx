import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

interface MovieListProps {
  title: string;
  hideSeeAll: boolean;
  data: any[]; // Add this line to include the 'data' prop
}

const MovieList: React.FC<MovieListProps> = ({ title, hideSeeAll, data }) => {
  return (
    <View style={{ marginVertical: 6 }}>
      <Text style={{ color: 'white', fontSize: 18, marginLeft: 16, marginBottom: 5 }}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((movie, index) => (
          <TouchableOpacity key={index} style={{ marginRight: 16, alignItems: 'center' }}>
            <View style={{ overflow: 'hidden', borderRadius: 12, height: 180, width: 120, borderColor: 'border-neutral-500' }}>
              <Image
                style={{ borderRadius: 12, height: 180, width: 120 }}
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
              />
            </View>
            <Text style={{ color: 'white', fontSize: 12, marginTop: 5 }}>
              {movie.title.length > 15 ? movie.title.slice(0, 15) + '...' : movie.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {!hideSeeAll && (
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 16 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>See All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MovieList;
