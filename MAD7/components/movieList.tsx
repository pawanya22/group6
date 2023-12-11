import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';

var { width, height } = Dimensions.get('window');

interface MovieListProps {
  title: string;
  data: any[]; // Replace 'any[]' with the actual type of your data
  hideSeeAll?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ title, data, hideSeeAll }) => {
  let movieName = 'Ant-Man and the Wasp: Quantumania';
  const navigation = useNavigation();

  return (
    <View style={{ marginBottom: 8, marginTop: 8 }}>
      <View style={{ marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={[styles.text, { fontSize: 16 }]}>
              See all
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', item)}>
              <View style={{ marginVertical: 8, marginRight: 16 }}>
                <Image
                  source={{ uri: 'data:image/jpeg;base64,' }} // Add the actual source for the Image
                  style={{ width: width * 0.33, height: height * 0.22, borderRadius: 16 }}
                />
                <Text style={{ color: 'white', marginLeft: 4, fontSize: 14 }}>
                  {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
