import { Component } from "react";

import {
    View,
    StyleSheet,
    Text,
    
  } from "react-native";



export default class PostCard extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.cardContainer}>
                    <View styles = {styles.authorNameContainer}>
                        <Text style = {styles.authorNameText}>{this.props.post.author} </Text>

                    </View>
              <View style = {styles.captionContainer}>
                <Text style = {styles.captionText}>
                    {this.props.post.caption}
                </Text>
              </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container:{
        flex:1
    },
    cardContainer:{
        margin:10,
        backgroundColor:"white",
        borderRadius:10,
        padding:15
    },
    authorNameContainer:{
        flex:0.85,
        justifyContent:"center"
    },
    authorNameText:{
        fontSize:20
    },
    captionText:{
        paddingTop:10
    }
    
})