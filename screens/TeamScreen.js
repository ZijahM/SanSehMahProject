import React, {useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator, FlatList, Text } from 'react-native'
// import { ListGroup } from 'react-bootstrap';
import { ListItem, Button } from 'react-native-elements'


function TeamScreen ({navigation}) {
    // const teams = [
    //     {
    //       title: 'team1',
    //     },
    //     {
    //       title: 'team2',
    //     },
    //   ];
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState ([]);
    useEffect(() => {
      fetch('http://localhost:3000/dev/hello')
        .then((response) => response.json())
        .then((json) => setData(json.teams))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    // const teamList = teams.map(team => <ListItem
    //     title={team.title}
    //     bottomDivider
    //     chevron
    //     onPress={() => navigation.navigate("Notes", {
    //       teamName: team.title,
    //     })}
    //   />
    //  )
     const teamList2 = data.map(team => <ListItem
      title={team.title}
      bottomDivider
      chevron
      onPress={() => navigation.navigate("Notes", {
        teamName: team.title,
      })}
    />
   )
    return (
        <ScrollView style={{marginTop:"30%"}}>
          {isLoading ? <ActivityIndicator/> : (
        // <FlatList
        //   data={data}
        //   keyExtractor={({ id }, index) => id}
        //   renderItem={({ item }) => (
        //     <Text>{item.title}</Text>
        //   )}
        // />
        teamList2
      )}
        {/* {
            teamList
        } */}
        </ScrollView>
        // <View><b>Teams</b>
        // </View>
    )
}

export default TeamScreen