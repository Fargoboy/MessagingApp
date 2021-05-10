import React from 'react';
import { FlatList, StyleSheet,Text, View, Button, TextInput } from 'react-native';
import mainstyle from '../mainstyle';


function VisitorProfile({visitor}) {
    return (
        <View style={styles.container}>
          
               <Text>Name: {visitor.visitorName} </Text>
               <Text>Email: {visitor.visitorEmail} </Text>
               <Text>Phone: {visitor.visitorPhone} </Text>
               <Text>Message: {visitor.visitorMessage} </Text>
              
        </View>
    );
}

export default VisitorProfile;
const styles = StyleSheet.create({
    container: {
     marginBottom: 20,
     backgroundColor: "beige",
     width: "25%",
     padding: 10,
     marginHorizontal: 15,
     textAlign: 'center',
     borderRadius: 20,
   
    },

  });

  