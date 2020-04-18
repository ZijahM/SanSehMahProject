import React, {useState} from 'react'
import { View, ScrollView, Alert } from 'react-native'
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
  // const [notes, setNotes] = useState(allNotes);
  const [notes, setNotes] = useState(allNotes.filter(note => note.team == teamName));

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
      setNotes(prevNotes => {
        return [{text, teamName}, ...prevNotes];
      });
    }
  };

return( <View>
  <Header
  centerComponent={{ text: teamName, style: { color: '#fff' } }}
/>
<ScrollView style={{marginTop:"30%"}}>
{
notes.map((note) =>{
return(
 <View>
     <ListItem title={note.text}
      bottomDivider
      chevron
      />
     </View>
)
})
}
<AddNote addNote={addNote} />
</ScrollView>
</View>
);
           
}
export default NotesScreen;

