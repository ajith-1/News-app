import { View, Text, ScrollView,Image,Dimensions} from 'react-native';
import React from 'react';


export default function Description({route}) {
    const {item}=route.params
  return (
    <ScrollView style={{margin:15}} showsVerticalScrollIndicator={false}>
      <Text style={{fontSize:20}}>{item.title}</Text> 
      {item.creator?<Text>{item.creator}</Text>:<></>}
      <Text style={{marginVertical:5}}>{item.pubDate}</Text>
      {item.image_url? <Image style={{ width: Dimensions.get('screen').width * 0.9, height:150,borderRadius:10 }} source={{ uri: `${item.image_url}` }} /> :<></>}
      {item.description? <Text style={{marginTop:15,fontSize:17,textAlign:'justify'}}>Highlights : {item.description}</Text>:<></>}
      <Text style={{marginTop:15,fontSize:17,textAlign:'justify'}}>{item.content}</Text>
    </ScrollView>
  )
}