// SearchScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
