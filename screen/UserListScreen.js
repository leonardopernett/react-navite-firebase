import React,{useEffect, useState} from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import {db} from '../firebase/firebase'

export default function UserListScreen(props) {
  const [users, setuser] = useState([])


  useEffect(() => {
    db.collection('users').onSnapshot(query=>{
      let user = []
        query.docs.forEach(doc => {
           user.push({...doc.data(),id:doc.id})
        });
        setuser(user)
    })
  }, [])

  return (
  <ScrollView>
   <Button title="createUser" onPress={()=>props.navigation.navigate('CreateUser')}  />
   {
     users.map((user)=>{
       return (
         <ListItem key={user.id} onPress={()=>props.navigation.navigate('UserDetails',{userId:user.id})}>
            <Avatar source={{uri: 'https://i.pravatar.cc/300'}} rounded />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
             </ListItem.Content>
         </ListItem>
       )
     })
   }
  </ScrollView>
  )
}
