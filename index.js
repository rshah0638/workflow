import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import {
  StyleSheet,
  AppRegistry,
  View,
  Text,
  StatusBar,
  Picker,
  CheckBox,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableHighlight
} from 'react-native'

var firebase = require("firebase")
require("firebase/firestore");


class App extends React.Component {

     componentWillMount(){
        var config = {
    apiKey: "AIzaSyDvCaLROPx2UBOy9YCfAee_qEbo0Ubi1xU",
    authDomain: "discovereworkflow.firebaseapp.com",
    databaseURL: "https://discovereworkflow.firebaseio.com",
    projectId: "discovereworkflow",
    storageBucket: "discovereworkflow.appspot.com",
    messagingSenderId: "286134955076"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
    }


constructor(props){
    super(props);

    this.state={pickerName: "Name",
                pickerselect:"Task",
                checked: "succeded",
                text: ''

  };
  this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(res, error){
    Alert.alert(JSON.stringify(this.state.pickerName),
                JSON.stringify(this.state.pickerselect)
              )
    let today = new Date();

  firebase.database().ref("activity").push(
    {
      Name: this.state.pickerName,
      task:  this.state.pickerselect,
      checked: this.state.checked,
      comments: this.state.text,
      date: moment().format('L'),
      Time: moment().format('LTS')

    }
   ).then(()=>{
    console.log("sucess");
   }).catch((error)=>{
    console.log("error")
   })

  this.setState({pickerName: "Name",
              pickerselect:"Task",
              checked: "succeded",
              text: ''
})
    }

  render() {
    return (


    <View style={styles.container}>
    <Image source={require('./logo/Black.jpg')} style={{height : 100, width: 450, justifyContent: 'flex-start'}} />
    <Text style={styles.title} >DISCOVERe </Text>


        <Picker
        selectedValue={this.state.pickerName}
        style={{ height: 50, width: 150,flex:0.2, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        onValueChange={(itemValue, itemIndex) => this.setState({pickerName: itemValue})}>
        <Picker.Item label=" Guide" value="users " />
        <Picker.Item label="Alwin " value="Alwin Villamor " />
        <Picker.Item label="Anthony " value="Anthony Gonzales " />
        <Picker.Item label="Antonio " value="Antonio Perez " />
        <Picker.Item label="Armando " value="Armando De Alba " />
        <Picker.Item label="Cade " value="Cade Berrett " />
        <Picker.Item label="Chase " value="Chase Hoffhous " />
        <Picker.Item label="Chelsey " value="Chelsey Johnson " />
        <Picker.Item label="Colton " value="Colton Robinson " />
        <Picker.Item label="Elijah " value="Elijah Hilliard " />
        <Picker.Item label="Elisabeth P " value="Elisabeth Parra" />
        <Picker.Item label="Elizabeth S " value="Elizabeth Santiago  " />
        <Picker.Item label="Jose " value="Jose E Mora-Lopez " />
        <Picker.Item label="Josh " value="Josh Jardenil " />
        <Picker.Item label="Kyle " value="Kyle Millholin " />
        <Picker.Item label="Majid " value="Majid Farhadloo " />
        <Picker.Item label="Marco " value="Marco Franco " />
        <Picker.Item label="Melanie " value="Melanie Magana " />
        <Picker.Item label="Puneet " value="Puneet Kaur " />
        <Picker.Item label="Ravi " value="Ravi Kumar Shah " />
        <Picker.Item label="Rebekah " value="Rebekah Robinson " />
        <Picker.Item label="Romylyn " value="Romylyn Teale " />
        <Picker.Item label="Touger " value="Touger Thao " />
        <Picker.Item label="Zackary " value="Zackary Potter " />
        </Picker>



  <Picker
  selectedValue={this.state.pickerselect}
  style={{ height: 50, width: 150,flex:0.2,  transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
  onValueChange={(itemValue, itemIndex) => this.setState({pickerselect: itemValue})}>
    <Picker.Item label="Task" value="Task" />
    <Picker.Item label="blackboard" value="blackboard" />
    <Picker.Item label="print" value="print" />
    <Picker.Item label="Wifi" value="Wifi" />
    <Picker.Item label="Office 365 download" value="Office 365 download" />
    <Picker.Item label="Ms Word" value="Ms word" />
    <Picker.Item label="Ms Excel " value="Ms Excel " />
    <Picker.Item label="Ms PowerPoint " value="Ms PowerPoint " />
    <Picker.Item label="Tablet Check-in " value="Tablet Check-in " />
    <Picker.Item label="Tablet check-out " value="Tablet check-out " />
    <Picker.Item label="Gmail " value="Gmail " />
    <Picker.Item label="Google Doc " value="Google Doc " />
    <Picker.Item label="Google sheets " value="Google sheets " />
    <Picker.Item label="Google slides " value="Google slides " />
    <Picker.Item label="Google drive " value="Google drive " />
    <Picker.Item label="Mac Os " value="Mac Os " />
    <Picker.Item label="Windows Os " value="Windows Os " />
    <Picker.Item label="Linux Os " value="Linus Os" />
    <Picker.Item label="Google Classroom" value= "Google Classroom" />
    <Picker.Item label="e-portfolio" value="e-portfolio" />
    <Picker.Item label="Zoom" value= "Zoom" />

    <Picker.Item label="Others" value="Others" />
</Picker>


  <Picker
  selectedValue={this.state.checked}
  style={{ height: 50, width: 150,flex:0.2,  transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
  onValueChange={(itemValue, itemIndex) => this.setState({checked: itemValue})}>
    <Picker.Item label="succeded" value="pass" />
    <Picker.Item label="I tried" value="fail" />
</Picker>


    <TextInput
            style={{height: 60, width:300, borderColor: 'gray', borderWidth: 1, alignItems: 'center',
            justifyContent: 'space-between',
          flexDirection: 'column'}}
            placeholder="Comments!!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />


  <Button
  icon={ <Icon name='arrow-right'  size={80} color='white'  />  }
    onPress={this.onButtonPress}
    title="      Done      "
    />

        <Text   style={{flex:0.2,justifyContent:'flex-end'}} >© Ravi kumar shah</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  defaultText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#012129',
    alignItems: 'center',
    flex:0.08,
    width: 450,
     height: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10},

  title:{
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    flex:0.1,
    fontFamily: 'monospace',
    width: 500,
     height: 300,
    backgroundColor: '#242021',

    justifyContent: 'flex-start'

  }
})

AppRegistry.registerComponent('workflow', () => App);
