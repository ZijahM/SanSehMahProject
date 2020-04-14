import React from 'react'
import { View } from 'react-native'
// import { ListGroup } from 'react-bootstrap';
import { ListItem, Button } from 'react-native-elements'


function TeamScreen ({navigation}) {
    const notes = [
        {
          title: 'note1',
        },
        {
          title: 'note2',
        },
      ]
    const noteList = notes.map(note => <ListItem
        title={note.title}
        bottomDivider
        chevron
      />
     )
    return (
        <div>
        {
            noteList
        }
        <Button
        onPress={() => navigation.navigate("AddNote", {
        })}
  title="Add note" 
/>
        </div>
        // <View><b>Teams</b>
        // </View>
    )
}

export default TeamScreen