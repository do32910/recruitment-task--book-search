import React, { Component } from 'react'
import './App.scss'
import GetBooks from '../src/GetBooks'

import { SearchBar } from './SearchBar'
import { BookList } from './BookList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }
    this.getBooks = this.getBooks.bind(this)
  }
  
  getBooks(searchTerm){
    GetBooks(searchTerm).then(results => this.setState({
      books: results
    }))
  }

  render() {
    console.log(this.state.books)
    return (
      <main className="main-container">
      <div>{this.state.books[0]}</div>
        <SearchBar getBooks= {this.getBooks}/>
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
