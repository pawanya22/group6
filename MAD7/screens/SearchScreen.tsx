import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');

// Define the navigation prop type
type NavigationProps = {
  navigate: (screen: string) => void;
  push: (screen: string, item: any) => void;
};

// Define the SearchScreen component
const SearchScreen: React.FC<{ navigation: NavigationProps }> = ({ navigation }) => {
  const [results, setResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.length > 2) {
        try {
          setLoading(true);
          const apiKey = '02221cab5de67332d75ff25ccc44e871'; // Replace with your actual API key
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
          );
          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ margin: 4, marginTop: 50, flexDirection: 'column', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 999,
            width: '90%',
            marginBottom: 10,
          }}
        >
          <TextInput
            placeholder="Search Movie"
            placeholderTextColor="gray"
            style={{ paddingBottom: 10, paddingLeft: 6, flex: 1, fontWeight: 'bold' }}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          {/* Button to navigate to the Home screen */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{ borderRadius: 999, padding: 3, margin: 1, backgroundColor: 'white' }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Results Section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          style={{ width: '100%' }}
        >
          {/* Display the number of results */}
          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 1, marginBottom: 10 }}>
            Results({results.length})
          </Text>

          {/* Display search results */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {results.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push('Movie', item)}
              >
                <View style={{ marginVertical: 3, marginBottom: 20 }}>
                  {/* Display movie image */}
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    style={{
                      width: Dimensions.get('window').width * 0.44,
                      height: Dimensions.get('window').height * 0.3,
                      borderRadius: 15,
                    }}
                  />
                  {/* Display movie name */}
                  <Text style={{ color: 'white', marginLeft: 1 }}>
                    {/* Slice movie name if it's too long */}
                    {item.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
