import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaMailBulk } from 'react-icons/fa';


function NotesScreen () {
    const notes = ['Note1', 'Note2', 'Note3']
    const noteList = notes.map(note => <ListGroup as="ul">
    <ListGroup.Item as="li" active>
        {note}
        <Button className="pull-right" onClick={() => {alert('do stuff')}}><FaMailBulk /></Button>
    </ListGroup.Item>
  </ListGroup>)
    return (
        <div>
        {
            noteList
        }
        </div>
    )
}

export default NotesScreen