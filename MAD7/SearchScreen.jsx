import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image, Dimensions } from "react-native";

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
    <SafeAreaView style={{ backgroundColor: "bg-natural-800", flex: 1 }}>
      <View style={{ margin: 4, marginBottom: 3, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: "border-neutral-500", borderRadius: 999 }}>
        <View>
          {/* Input for searching movies */}
          <TextInput
            placeholder="Search Movie"
            placeholderTextColor="Light Gray"
            style={{ paddingBottom: 1, paddingLeft: 6, flex: 1, fontWeight:'bold' }}
          />
          {/* Button to navigate to the Home screen */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ borderRadius: 999, padding: 3, margin: 1, backgroundColor: "bg-neutral-500" }}>
            {/* Add XMarkIcon component here */}
          </TouchableOpacity>
        </View>

        {/* Results Section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          style={{ marginVertical: 3, marginBottom:4 }}
        >
          {/* Display the number of results */}
          <Text style={{ color: "text-white", fontWeight: "bold", marginLeft: 1 }}>Results({results.length})</Text>

          {/* Display search results */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
            {results.map((item, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => navigation.push("Movie", item)}>
                <View style={{ marginVertical: 3, marginBottom:4 }} >
                  {/* Display movie image */}
                  <Image
                    source={require("D:\\React Native\\Profile\\profile\\Image.jpg")}
                    style={{ width: Dimensions.get("window").width * 0.44, height: Dimensions.get("window").height * 0.3, borderRadius: 15 }}
                  />
                  {/* Display movie name */}
                  <Text style={{ color: "text-neutral-300", marginLeft: 1 }}>
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
