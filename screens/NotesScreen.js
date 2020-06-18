import React, {useState, useEffect} from 'react'
import { View, ScrollView, Alert, StyleSheet, Button, ActivityIndicator } from 'react-native'
// import { ListGroup } from 'react-bootstrap';
import { ListItem, Header } from 'react-native-elements'
import AddNote from '../screens/AddNote'
// import {View, StyleSheet, FlatList, Alert} from 'react-native';


const allNotes = [
  {
    text: 'Note1',
    team: 'team1'
  },
  {
    text: 'Note2',
    team: 'team2'
  },
  {
    text: 'Note3',
    team: 'team2'
  },
  {
    text: 'Note4',
    team: 'team1'
  },
]


function NotesScreen({ navigation, route }) {
  const { teamName } = route.params;
  const [data, setData] = useState ([]);
  const [notes, setNotes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [notes, setNotes] = useState(allNotes.filter(note => note.team == teamName));


  useEffect(() => {
    fetch('http://localhost:3000/dev/notes')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .then (()=>setNotes(data.filter(note => note.team == teamName)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      }, []);

   const addNote = text => {
    if (!text) {
      Alert.alert(
        'No note entered',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      fetch('http://localhost:3000/dev/notes', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    team: teamName,
    note: text
  })
});
      setNotes(prevNotes => {
        return [{text, teamName}, ...prevNotes];
      });
    }
  };

  const notesList = notes.map(note => <ListItem
    title={note.note}
    bottomDivider
    chevron
  />
 )



return(
  <ScrollView >
  <Header
  centerComponent={{ text: teamName, style: { color: '#fff' } }}
/>
{/* <Button
          title={'Add a new team member'}
          onPress={() => {
             {
              navigation.navigate("AddTeamMember", {
                teamName: teamName,
              });
            } 
          }}
        /> */}
<View style={{marginTop:"30%"}}>
<Button 
  title="Display"
  onPress={()=>
setNotes(data.filter(note => note.team == teamName))
  }
  />
  {/* <Button 
  title="notes log"
  onPress={()=>
  console.log(notes)
  }
  /> */}

{isLoading ? <ActivityIndicator/> : (
        // <FlatList
        //   data={data}
        //   keyExtractor={({ id }, index) => id}
        //   renderItem={({ item }) => (
        //     <Text>{item.title}</Text>
        //   )}
        // />
        notesList
      )}


{/* {
data.map((note) =>{
return(
 <View>
     <ListItem title={note.team}
      bottomDivider
      chevron
      />
     </View>
)
})
} */}
</View>
<AddNote addNote={addNote} />
</ScrollView>
);

           
}
export default NotesScreen;

