import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native-elements'
import { NavigationContainer, useRoute } from '@react-navigation/native'
import { fetchPersonDetails, fetchPersonMovies } from '../../api/moviedb'



var { width, height } = Dimensions.get('window')


const Actor = () => {

 const[personMovies,setPersonMovies]=useState {[]};
 const[person,setPerson]=useState{[]};
 const {params:item} = useRoute();
 const [loading, setLoading] = useState(false);


 useEffect{()=>{
  setLoading(true);
  console.log('person',item);
  getPersonDetails(item.id);

 },[item]};

 const getPersonDetails=async (id: any)=>{
  const data =await fetchPersonDetails(id);
  //console.log('got person details :',deta);
  if(data) setPerson(data);
  setLoading (false)
  if(data) {
    setPerson(data);
}

 }

 const getPersonMovies = async (id: any)=>{
  const data = await fetchPersonMovies(id);
  console.log('got person movies')
  if(data && data.cast){
      setPersonMovies(data.cast);
  }

}

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <TouchableOpacity /*onPress={()=>Navigation.goBack()}*/>
            <Image style={{ width: 40, height: 40, marginTop: 10, marginLeft: 300 }} source={require('../../assest/images/white-back-icon-5.jpg')} />
          </TouchableOpacity>

          {/*preson details*/}

          <View style={{ alignItems: 'center',/* shadowColor: 'white', shadowRadius: 40, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 1 */ }}>
            <View>
              <Image style={{ width: 200, height: 200, borderRadius: 100, marginTop: 50, alignContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#ffffff' }} source={require('../../assest/images/ragna.jpg')} />
            </View>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 30 }} >Travis Fimmel</Text>
            <Text>Echuca, Victoria, Australia</Text>
          </View>

          <View style={styles.details_box}>
            <View style={styles.frist_box}>
              <Text>Actor</Text>
              <Text>male</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={styles.second_box}>
              <Text>Birthday</Text>
              <Text>2001.11.30</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={{justifyContent: 'center',alignItems: 'center',}}>
              <Text>Know for</Text>
              <Text>Acting</Text>
            </View>
            <View style={styles.box_line_1} />
            <View style={{justifyContent: 'center',alignItems: 'center',}}>
              <Text>popiularity</Text>
              <Text>20-30</Text>
            </View>
          </View>

          <View>
            <Text style={styles.bio}>Biography</Text>
            <Text style={styles.bio_data}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
              animi a non itaque modi quas corrupti tempore inventore fuga!
              Voluptate illum laboriosam pariatur consequuntur neque quisquam
              deserunt porro sequi, eos modi ad dolores ipsa inventore vero, quos
              deleniti? Eaque saepe, sequi ratione hic cupiditate asperiores culpa
              modi cum nobis dolor.
            </Text>
            <Text style={styles.similar}>Similar movie</Text>
          </View>

          <ScrollView horizontal>
            <View style={{ width: 700, height: 200, flexDirection: 'row', marginTop: 10 }}>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
              <View style={{ height: 170, width: 120, backgroundColor: 'red', marginLeft: 10 }}></View>
            </View>
          </ScrollView>



        </View>
      </SafeAreaView>
    </ScrollView>

  )
}

export default Actor

const styles = StyleSheet.create({
  details_box: {
    width: 320,
    height: 60,
    //backgroundColor: '#1607ba',
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 10,
    borderWidth:1,
    borderColor:'#ffffff'
  },
  frist_box: {
    marginLeft: 13,
    justifyContent: 'center',
  },
  box_line_1: {
    backgroundColor: '#ffffff',
    width: 2,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 5

  },
  second_box: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bio: {
    marginTop: 10,
    marginLeft:10,
    fontSize:20,
  },
  bio_data: {
    marginLeft: 10,
    marginTop: 10,
  },
  similar: {
    marginTop: 10,
    marginLeft:10,
    fontSize:20,
  },
})

function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.')
}
function fetchActorDetails(id: any) {
  throw new Error('Function not implemented.')
}

