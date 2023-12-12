import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../types';

interface CastProps {
  cast: any[]; // Replace 'any[]' with the actual type of your cast data
  navigation: NavigationProp<RootParamList>;
  onPress: (person: any) => void;
}

const Cast: React.FC<CastProps> = ({ cast, onPress }) => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const apiKey = '02221cab5de67332d75ff25ccc44e871'; // Replace with your actual API key
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${cast[0]}/credits?api_key=${apiKey}`
        );
        const data = await response.json();
        console.log('Cast API Response:', data); // Log the response for debugging
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [cast]);

  const handlePersonPress = (person: any) => {
    navigation.navigate('Person', { personId: person.id });
  };

  if (!loading && (!cast || cast.length === 0)) {
    return <Text style={{ color: 'white' }}>No cast information available.</Text>;
  }

  return (
    <View style={{ marginVertical: 6 }}>
      <Text style={{ color: 'white', fontSize: 18, marginLeft: 16, marginBottom: 5 }}>Top cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {loading ? (
          <Text style={{ color: 'white' }}>Loading...</Text>
        ) : (
          cast.map((person, index) => (
            <TouchableOpacity
              key={index}
              style={{ marginRight: 16, alignItems: 'center' }}
              onPress={() => onPress(person)}
            >
              <View style={{ overflow: 'hidden', borderRadius: 12, height: 100, width: 80, alignItems: 'center', borderColor: 'border-neutral-500' }}>
                <Image
                  style={{ borderRadius: 50, height: 100, width: 80 }}
                  source={{ uri: person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : 'default_image_url' }}
                />
              </View>
              <Text style={{ color: 'white', fontSize: 12 }}>
                {person.character.length > 10 ? person.character.slice(0, 10) + '...' : person.character}
              </Text>
              <Text style={{ color: 'white', fontSize: 12 }}>
                {person.name.length > 10 ? person.name.slice(0, 10) + '...' : person.name}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Cast;
function setCast(cast: any) {
  throw new Error('Function not implemented.');
}

