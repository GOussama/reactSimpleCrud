import React, { Component } from "react";
import "./styles.css";
import Table from "./Table";
import Form from "./Form"

class App extends Component {
  
  state = {
    characters: [
    
    ]
  };

  handleSubmit = character => {
    this.setState({ characters : [...this.state.characters, character] })
  }
  
  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
    // const listofchar = this.state.characters.filter((character, i) => {
    //   return i !== 2;
    // });
    // console.log(listofchar);
  };
  render() {
    console.log(this.state.characters);
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
