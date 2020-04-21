import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
  } from 'react-native'; 

  const teamMembers = [
    {
      text: 'Name1',
      team: 'team1'
    },
    {
      text: 'Name2',
      team: 'team2'
    },
    {
      text: 'Name3',
      team: 'team2'
    },
    {
      text: 'Name4',
      team: 'team1'
    },
  ]

function AddTeamMember({ navigation, route }) {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    const {teamName} = route.params;
    // const [notes, setNotes] = useState(allNotes);
    const [teammates, setTeammates] = useState(teamMembers.filter(person => person.team == teamName))

    const addPerson = text => {
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
            setTeammates(prevTeammates => {
            return [{text}, ...prevTeammates];
          });
        }
      };

      return (
        <ScrollView >
            { teammates.map((teammate) =>{
            return(
             <View>
                 <ListItem title={teammate.text}
                  bottomDivider
                  chevron
                  />
                 </View>
            )
            })}
            <View>
          <TextInput
            placeholder="Add teammate..."
            style={styles.input}
            onChangeText={onChange}
            value={text}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              addPerson(text);
              setText('');
            }}>
            <Text style={styles.btnText}>
             Add Person
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>   
      );
    };
    
    const styles = StyleSheet.create({
      input: {
        height: 60,
        padding: 8,
        margin: 5,
      },
      btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
      },
      btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
    });
    
  
    export default AddTeamMember;