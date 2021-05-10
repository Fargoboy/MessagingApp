import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { addVisitor } from '../action/visitor-action';

function HomeIndex(props) {
    const [visitorName, setVisitorName] = useState("")
    const [visitorEmail, setVisitorEmail] = useState("")
    const [visitorPhone, setVisitorPhone] = useState("")
    const [visitorMessage, setVisitorMessage] = useState("")

    
    
    const handleAddVisitor =()=>{
        let visitor = {
            visitorName,
            visitorEmail,
            visitorPhone,
            visitorMessage
        }

        console.log(visitor)
        props.dispatch(addVisitor(visitor))
        reset()
    }

    const reset = ()=>{
        setVisitorName("")
        setVisitorEmail("")
        setVisitorPhone("")
        setVisitorMessage("")
    }

    const getStatus =()=>(
        visitorName && visitorEmail && visitorPhone
    )

    return (
        <View style={styles.container}>
<View style={styles.formset}>
        <Text style={styles.title}>
    You have { props.visitors.all_visitors.length } Messages.
    
    </Text>
    

        <TextInput
            style={styles.input}
            value={visitorName}
            placeholder="Enter visitor's name"
            onChangeText={(value)=> setVisitorName(value)}
        />

        <TextInput
            style={styles.input}
            onChangeText={setVisitorEmail}
            value={visitorEmail}
            placeholder="Enter visitor's email"
        />

        <TextInput
            style={styles.input}
            onChangeText={setVisitorPhone}
            value={visitorPhone}
            placeholder="Enter visitor's phone"
        />

  <TextInput style={styles.message}

          
            onChangeText={setVisitorMessage}
            value={visitorMessage}
            placeholder="Message"
        />







    
        <Button
            color="#841584"
            disabled = {!getStatus()}
            title="Send Message"
            onPress={handleAddVisitor}
        />

    
        <Button
          title="See all Messages"
          onPress={() =>
            props.navigation.navigate('Visitors')
          }
        />

  

</View>
      </View>
    );
}

const mapStateToProps = (state) => {
    const { visitors } = state
    return { visitors }
  };
   
  export default connect(mapStateToProps)(HomeIndex);




  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },

    formset:{
        width: 300,
        height: 500,
        margin: 10,
        padding: 15,
        borderWidth: 10,
        borderColor: "green",
        textAlign:'center',
        shadowColor:'blue',
        borderRadius: 10,
        alignContent:'center',
     
    },
    input:{
        width: '100%',
        height: 30,
        margin: 4,
        padding: 2,
        borderWidth: 1,
        borderColor: "green",
        textAlign:'center',
        shadowColor:'blue',
        borderRadius: 10,
        color:'black',
        backgroundColor:'white',  
    },
   title: {
        backgroundColor: 'red',
        borderEndWidth:5,
        color:'white',
        marginTop:0,
        marginBottom:2,
        height:30,
        borderRadius:15,
        fontSize:20,
       
   },
   message:{
       height:200,
       backgroundColor:'mintcream',

       textAlign: 'center',
       borderBottomColor:'blue',
       borderLeftWidth: 2,
       borderRadius: 10,
       
    

   }
    
  });