import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import {db} from '../firebase/firebase'

export default function UserDetailScreen(props) {
   
const [user, setUser] = useState({name:"",email:"",phone:""})
const [loading, setLoading] = useState(false)

const getUserById = async (id)=>{
   const doc =  await db.collection('users').doc(id).get()
   const usuario = doc.data()
   setUser({...usuario, id:doc.id })
   setLoading(false)
  }

  const handleText =(name, value)=>{
   setUser({...user, [name]:value})
  }

  const edituser = async ()=>{
      await db.collection('users').doc(user.id).update(user)
      props.navigation.navigate('UserList')
  }

  const deleteUser = async (id)=>{
       await db.collection('users').doc(id).delete()
       props.navigation.navigate('UserList')

  }

  useEffect(() => {
    setLoading(true)
    getUserById(props.route.params.userId)
  }, [])

  if(loading){
    return (
        <View>
         <ActivityIndicator size="large" color="#e9e9e9" /> 
        </View>
    )
  }
  return (
      <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="name" value={user.name} onChangeText={(value)=> handleText('name', value)} />
      </View>

      <View  style={styles.inputGroup}>
        <TextInput placeholder="email" value={user.email} onChangeText={(value)=>handleText('email',value)} />
      </View>

      <View  style={styles.inputGroup}>
        <TextInput placeholder="phone"  value={user.phone} onChangeText={(value)=>handleText('phone',value)} />
      </View>
      <View>
        <Button title="edit user" color="#19ac52"  onPress={()=>edituser()} />
        <Button title="delete user" color ="#e37399" style={styles.button}  onPress={()=>deleteUser(user.id)} />

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
  },
  button:{
    backgroundColor:"#ccc"
  }
})