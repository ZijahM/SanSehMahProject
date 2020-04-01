import React from 'react'
import { ListGroup } from 'react-bootstrap';


function TeamScreen () {
    const teams = ['team1', 'team2', 'team3']
    const teamList = teams.map(team => <ListGroup as="ul">
    <ListGroup.Item as="li" active>
        {team}
    </ListGroup.Item>
  </ListGroup>)
    return (
        <div>
        {
            teamList
        }
        </div>
    )
}

export default TeamScreen