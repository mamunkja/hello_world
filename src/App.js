import Book from './components/Book';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    book: [
      { bookName: "Modern English", writer: "Abdul Karim" },
      { bookName: 'Physics', writer: 'Minhajul Islam' },
      { bookName: 'General Science', writer: 'Rakibul Islam' }
    ],
    otherProp: 'I am other property'
  }

  changeBookName = (newBookName) => {
    this.setState({
      book: [
        { bookName: newBookName, writer: "Abdul Karim" },
        { bookName: 'English', writer: 'Nazrul Islam' },
        { bookName: 'General Science', writer: 'Rakibul Islam' }
      ]
    });
  }

  changeBookWithInput = (event) => {
    this.setState({
      book: [
        { bookName: event.target.value, writer: "Abdul Karim" },
        { bookName: 'English', writer: 'Nazrul Islam' },
        { bookName: 'General Science', writer: 'Rakibul Islam' }
      ]
    });
  }

  render() {
    const style = {
      border: "2px solid black",
      backgroundColor: "blue",
      color: "white",
      margin: "5px"
    }

    return (
      <div className="App">
        <button type="button" className='Change-book' onClick={() => this.changeBookName('Modern English')} >Change Book Name</button>
        <h1 style={style}>Book List </h1>
        <Book name={this.state.book[0].bookName}
          writer={this.state.book[0].writer}
          inputChange={this.changeBookWithInput} />
        <Book name={this.state.book[1].bookName} writer={this.state.book[1].writer} />
        <Book name={this.state.book[2].bookName}
          writer={this.state.book[2].writer}
          change={() => this.changeBookName('General English')} />
      </div>
    );
  }
}


export default App;
