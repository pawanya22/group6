import React, { useState } from 'react';
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

var { width, height } = Dimensions.get('window');
// Define the navigation prop type
type NavigationProps = {
  navigate: (screen: string) => void;
  push: (screen: string, item: any) => void;
};

// Define the SearchScreen component
const SearchScreen: React.FC<{ navigation: NavigationProps }> = ({ navigation }) => {
  // State for storing search results
  const [results, setResults] = useState<number[]>([1, 2, 3, 4]);
  // Placeholder movie name
  let movieName: string = 'Ant man and the wasp: Quauntmania';

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View
        style={{
          margin: 4,
          marginTop: 50,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Input for searching movies */}
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
          />
          {/* Button to navigate to the Home screen */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{ borderRadius: 999, padding: 3, margin: 1, backgroundColor: 'white' }}
          >
            <Image style={{ width: 40, height: 40 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU'}} />
            {/* Add XMarkIcon component here */}
          </TouchableOpacity>
        </View>

        {/* Results Section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          style={{ width: '100%' }}
        >
          {/* Display the number of results */}
          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 1, marginBottom: 10 }}>Results({results.length})</Text>

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
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hgjD8Q2ZFVh95kLsSwr20CKZdHwNtD1osQ&usqp=CAU' }}
                    style={{
                      width: Dimensions.get('window').width * 0.44,
                      height: Dimensions.get('window').height * 0.3,
                      borderRadius: 15,
                    }}
                  />
                  {/* Display movie name */}
                  <Text style={{ color: 'white', marginLeft: 1 }}>
                    {/* Slice movie name if it's too long */}
                    {movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName}
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
