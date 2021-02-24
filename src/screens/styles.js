import React,{Component} from 'react';
import { StyleSheet,View,Text,FlatList,TouchableOpacity,Linking } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
    container:{
       marginTop: 10,
      backgroundColor: '#52a5f2'
    },
    itemRow:{
      borderBottomColor: 'red',
      marginBottom:10,
      borderBottomWidth:1,
    },
    itemText:{
      color: "black",
      fontSize: 20,
      justifyContent: "center",
      textAlign: "center",
      
    },
    itemTextTitle:{
      color: "black",
      fontSize: 20,
      justifyContent: "center",
      textAlign: "center",
      fontWeight: "bold"
    },
    itemTextTime:{
      color: "black",
      fontSize: 20,
      justifyContent: "center",
      textAlign: "center",
      fontWeight: '500',
      left : 70
    },
    header:{
      backgroundColor: '#52a5f2',
      alignItems: 'center',
     
      height: 150
    },
    headerText:{
      color: 'black',
      fontSize: 30,
      paddingTop: 70,
      fontWeight:'bold',
    
    },
    button: {
       width: 410,
       marginTop: 20,
      backgroundColor: "#ddd",
       padding: 10,
      borderRadius: 5,
      left:6
      // justifyContent: "center"
    },
    btnText: {
      color: "#d62dc5",
      fontSize: 20,
      justifyContent: "center",
      textAlign: "center",
    },
  
  })

  export default styles;
  
  
  
  // fetch(apiUrl).then((res)=>res.json())
  //     .then((resJson) => {
  //       this.setState({
  //         data: resJson
  //       })
  //     })
  
  // const apiUrl = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0"
  
  // getData = async()=>{
  //   try {
  //     const response = await axios.get(
     
  //      "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0"
  //     );
      
  //       let res= response.data;
  //       console.log(res);
        
  
         
  //   } catch (error) {
      
  //     alert(error.message);
  //   }
    
  // }
  
  
  // 