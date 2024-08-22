import { Component } from 'react'
import PostCard from './PostCard'
let posts = require("./temp_posts.json")
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Platform
  
} from "react-native";
import { StatusBar } from 'expo-status-bar';
export default class Feed extends Component{
 

  keyExtractor = (item,index) => index.toString()
render(){
  return(
    <View style = {styles.container}>
     <SafeAreaView style = {styles.droidSafeArea}>
<View style = {styles.appTitle}>
  <Text style = {styles.appTitleText}>Spectagram</Text>

</View>

<View style = {styles.cardContainer}>
  <FlatList 
  keyExtractor={this.keyExtractor}
  data={posts}
  renderItem = {this.renderItem}
  />
</View>
     </SafeAreaView>
    </View>
  )
}

}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"darkblue",
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android" ? StatusBar.currentHeight:35
  },
  appTitle:{
    flex:0.07,
    padding:5,
    flexDirection:"row",
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize:28
  },
  cardContainer:{
    flex:0.93
  }
  })    