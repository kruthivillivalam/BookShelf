import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getBooks} from './API/Api'
import BookList from './Components/BookList';
import WantToRead from './Components/WantToRead'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      books:[]
    }
  }

   componentDidMount(){
        getBooks().then((data)=>{
                console.log("Data=="+JSON.stringify(data))
                this.setState({
                    books: data
                })
            console.log("books"+JSON.stringify(this.state)) 
        });     
    }
  
    render(){
      return (
        <div className="App">
          <BookList books={this.state.books} title="Book Shelf"/>
          <BookList books = {this.state.books.filter(book => book.shelf=="wantToRead")} title="Want To Read"/>
          <BookList books = {this.state.books.filter(book => book.shelf=="read")} title="Read"/>
          
        </div>
        );
    }
 
}

export default App;
