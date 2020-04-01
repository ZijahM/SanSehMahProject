import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TeamScreen from './components/TeamScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNote from './components/AddNote';
import NotesScreen from './components/NotesScreen';
import Register from './components/Register';
import Login from './components/Login';


export default function App() {
  const [goalReached, setGoalReached] = useState(false);
  return (
    <View style={styles.container}>
      <div>
        <TeamScreen/>
        <AddNote/>
        <NotesScreen/>
        <Register/>
        <Login/>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
