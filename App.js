// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useState } from 'react';



export default function App() {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = ()=>{
    let errors = {};
    if (!username){errors['username'] = 'Username is required';}

    if(!password) errors.password = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
    //Object.keys(errors) returns an array of all the keys i.e ['password','username']
  }

  const handleSubmit = ()=>{
    if(validateForm()){
      console.log('Submitted', username, password);
      setUsername('');
      setPassword('');
      setErrors({});
    }
  }
  return (

    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <Image style={styles.image} source={{uri:'https://picsum.photos/200'}}/>
      <View>
        <Text style={[styles.label,{marginBottom:10}]}>Login</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <Button title="Login" onPress={() => { handleSubmit() }} />
      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5'
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image:{
    width: 200,
    height: 200,
    alignSelf:'center',
    marginBottom: 20,
    borderRadius:100,
    borderWidth:1,
    borderColor:'#ccc'
  },
  errorText:{
    color:'red',
    marginBottom: 10,
  }
});
