import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import {Header} from "react-native-elements"

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
      displayText:''
    }
  }
  render() {
    return (
      <SafeAreaView>
      <View style={styles.container}>
      <Header backgroundColor = {"cyan"}
      centerComponent = {{text:"Monkey Chunky",style:{color:"white",fontSize:20}}}/>  
      <TextInput style={styles.inputbox} onChangeText={(text)=>{
        this.setState({
          text:text
        })}}value={this.state.text}/>
        <TouchableOpacity 
        style = {styles.gobutton}
        onPress = {()=>{
          this.setState({
            displayText:this.state.text
          })
        }}>
          <Text style = {styles.gobuttontext}>
            GO
          </Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>
          {this.state.displayText}
        </Text>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputbox:{
    marginTop:200,
    width:"80%",
    alignSelf:"center",
    textAlign:"center",
    height:40,
    borderWidth:5
  },
  gobutton:{
    width:"50%",
    height:"50%",
    alignSelf:"center",
    margin:20
  },
 gobuttontext:{
   textAlign:"center",
   fontSize:30,
  
 },
displayText:{
  textAlign:"center",
  fontSize:30
}
});
