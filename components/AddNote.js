import React from 'react';


export default class AddNote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A note ' + this.state.value + ' was added');
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}> 
            <header> Add Note </header>
            <input type="text" value={this.state.value} onChange={this.handleChange} />       
          <input type="submit" value="Add" /> 
        </form>
        </div>
      );
    }
  }