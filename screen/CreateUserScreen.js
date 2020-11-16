import React,{useState} from 'react'
import { View, TextInput, ScrollView, Button, StyleSheet } from 'react-native'
import {db, firebase} from '../firebase/firebase'
export default function CreateUserScreen(props) {

  const [state, setstate] = useState({
     name:"",
     email:"",
     phone:""
  })

  const handleText = (name, value)=>{
      setstate({...state, [name]:value})
  }

  const adduser = async ()=>{
    await db.collection('users').add({
       name:state.name,
       email:state.email,
       phone:state.phone,
    })
    props.navigation.navigate('UserList')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="name" onChangeText={(value)=>handleText('name',value)} />
      </View>

      <View  style={styles.inputGroup}>
        <TextInput placeholder="email" onChangeText={(value)=>handleText('email',value)} />
      </View>

      <View  style={styles.inputGroup}>
        <TextInput placeholder="phone" onChangeText={(value)=>handleText('phone',value)} />
      </View>
      <View>
        <Button title="save user"  onPress={()=>adduser()} />
      </View>
    </ScrollView>
   
  )
}

const styles = StyleSheet.create({
    container:{
       padding:10,
       flex:1
    },
    inputGroup:{
      borderBottomColor:'#cccccc',
      borderBottomWidth:1,
      marginBottom:15
    }
})
