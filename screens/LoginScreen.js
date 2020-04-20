import * as React from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";

export default function LoginScreen ({navigation}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  
    return (
      <View style={styles.container}>
        
        <TextInput
        onChange={(e) => {
          setUsername(e.nativeEvent.text);
        }}
        style={styles.input}
        placeholder="Enter username"
      />
      <TextInput
        onChange={(e) => {
          setPassword(e.nativeEvent.text);
        }}
        style={styles.input}
        placeholder="Enter password"
      />
      <Text>{error}</Text>
        <Button
          title={'Login'}
          style={styles.input}
          onPress={() => {
            if (username === "test" && password === "test") {
              navigation.navigate("Root", {
              });
            } else {
              setError("Incorrect credentials.");
            }
          }}
        />
        <Button
          title={'Register'}
          style={styles.input}
          onPress={() => {
              navigation.navigate("Register", {
            })
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: 'lightblue',
    marginBottom: 10,
    marginTop: 10,
  },
 

 
});


