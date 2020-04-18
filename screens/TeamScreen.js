import React from 'react'
import { View } from 'react-native'
// import { ListGroup } from 'react-bootstrap';
import { ListItem, Button } from 'react-native-elements'


function TeamScreen ({navigation}) {
    const teams = [
        {
          title: 'team1',
        },
        {
          title: 'team2',
        },
      ]
    const teamList = teams.map(team => <ListItem
        title={team.title}
        bottomDivider
        chevron
        onPress={() => navigation.navigate("Notes", {
          teamName: team.title,
        })}
      />
     )
    return (
        <View style={{marginTop:"30%"}}>
        {
            teamList
        }
        </View>
        // <View><b>Teams</b>
        // </View>
    )
}

export default TeamScreen