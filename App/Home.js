import { StyleSheet, View, Image, Text, Dimensions, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Home({navigation}) {

  const [item, setItem] = useState([]);

  const getData = async () => {
    const res = await fetch('https://newsdata.io/api/1/news?apikey=pub_3094887e85f01a274bb66242d720c8d5503e2&q=pegasus&language=en');
    const data = await res.json();
    setItem(data.results);
  }

  useEffect(() => {
    getData()
  }, [])

 const handleTab=(item)=>{
  navigation.push('Description',{item})
 }

  return (
    <View style={{paddingHorizontal: 15 }}>
      <FlatList
        data={item}
        keyExtractor={item => item.article_id}
        renderItem={({ item }) =>
        <View style={{ marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', gap: 10 }} >             
              <Text style={{ fontSize: 17, width: Dimensions.get('screen').width * 0.7 }} onPress={()=>handleTab(item)}>{item.title}</Text>
              {item.image_url ? <Image style={styles.image} source={{ uri: `${item.image_url}` }} /> :
                <Image style={styles.image} source={require('../assets/icon.png')} />}
            </View>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width * 0.3,
   height: 80 
  }
})