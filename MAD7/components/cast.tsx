import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

interface CastProps {
  cast: any[]; // Replace 'any[]' with the actual type of your cast data
  navigation: any; // Replace 'any' with the actual type of your navigation object
}

const Cast: React.FC<CastProps> = ({ cast, navigation }) => {
  let personName = 'Keanu Reevs';
  let characterName = 'John Wick';

  return (
    <View style={{ marginVertical: 6 }}>
      <Text style={{ color: 'white', fontSize: 18, marginLeft: 16, marginBottom: 5 }}>Top cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginRight: 16, alignItems: 'center' }}
                onPress={() => navigation.navigate('Person', person)}
              >
                <View style={{ overflow: 'hidden', borderRadius: 12, height: 100, width: 80, alignItems: 'center', borderColor: 'border-neutral-500' }}>
                  <Image
                    style={{ borderRadius: 50, height: 100, width: 80 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU88rtFoC_cnDDf0rhGg_9ZoRASTmJXfrw5w&usqp=CAU'}}
                  />
                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>
                  {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
                </Text>
                <Text style={{ color: 'white', fontSize: 12}}>
                  {personName.length > 10 ? personName.slice(0, 10) + '...' : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
