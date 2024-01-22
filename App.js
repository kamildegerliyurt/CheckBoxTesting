import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const App = () => {

//--------------------------------------------
const [checked, setChecked]= useState(false)

const handleHeartPress = ()=> {
  setChecked(!checked)
}
//--------------------------------------------

// YAPI OLARAK BİZDEN "FontAwesome" KABUL EDİYOR  

  return (
    <View style={styles.container}>
     
    <View style={styles.firstContainer}>
      <CheckBox checked={checked}     
                onPress={handleHeartPress}/>  
   
                
      <CheckBox checked={checked}     
                onPress={handleHeartPress}
                checkedIcon="heart"/>  

      <CheckBox checked={checked}     
                onPress={handleHeartPress}
                checkedIcon="heart"
                uncheckedIcon="heart-o"/> 


      <CheckBox checked={checked}
                checkedIcon="heart"
                uncheckedIcon="heart-o"
                checkedColor='red'
                onPress={handleHeartPress}/>                  

    </View>


    <View style={styles.secondContainer}>
    <CheckBox   checked={checked}
                checkedIcon="star"
                uncheckedIcon="star-o"
                checkedColor="orange"
                onPress={handleHeartPress}/> 

    <CheckBox   checked={checked}
                checkedIcon="thumbs-up"
                uncheckedIcon="thumbs-down"
                checkedColor="#1E88E5"
                onPress={handleHeartPress}/>  


    <CheckBox   checked={checked}
                checkedIcon="unlock"
                uncheckedIcon="lock"
                checkedColor="#1E88E5"
                onPress={handleHeartPress}/>   


    <CheckBox   checked={checked}
                checkedIcon="volume-up"
                uncheckedIcon="volume-off"
                checkedColor="#1E88E5"
                onPress={handleHeartPress}/>                      


    </View>


    <View style={styles.thirdContainer}>
    <CheckBox   checked={checked}
                checkedIcon="bell-slash-o"
                uncheckedIcon="bell-o"
                checkedColor="black"
                onPress={handleHeartPress}/> 

    <CheckBox   checked={checked}
                checkedIcon="lemon-o"
                uncheckedIcon="lemon-o"
                checkedColor="orange"
                onPress={handleHeartPress}/>  


    <CheckBox   checked={checked}
                checkedIcon="microphone-slash"
                uncheckedIcon="microphone"
                checkedColor="black"
                onPress={handleHeartPress}/>   


    <CheckBox   checked={checked}
                checkedIcon="smile-o"
                uncheckedIcon="meh-o"
                checkedColor="red"
                onPress={handleHeartPress}/>                      


    </View>

    

 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstContainer: {
    borderWidth:2,
    width:"95%",
    borderRadius:10,
    borderColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  },
  secondContainer: {
    marginVertical:10,
    borderWidth:2,
    width:"95%",
    borderRadius:10,
    borderColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  },
  thirdContainer: {
    marginVertical:10,
    borderWidth:2,
    width:"95%",
    borderRadius:10,
    borderColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  }




});

export default App;
