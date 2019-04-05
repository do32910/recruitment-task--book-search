import React, { Component } from 'react'
import './App.scss'
import GetBooks from '../src/GetBooks'

import { SearchBar } from './SearchBar'
import { BookList } from './BookList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      searchTerm: "",
      startIndex: 0
    }
    this.getBooks = this.getBooks.bind(this)
  }
  
  getBooks(searchTerm){
    GetBooks(searchTerm, this.state.startIndex)
    .then(results => {
      this.setState({
        books: this.state.books.concat(results.items)
      })
    })
  }

  handleScroll = (e) => {
    if(window.scrollY + window.innerHeight + 1 > document.body.clientHeight){
      this.setState({
        startIndex: this.state.startIndex+10
      }, this.getBooks(this.state.searchTerm, this.state.startIndex))
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
  }

  render() {
    console.log(this.state.books)
    return (
      <main className="main-container">
        <SearchBar getBooks= {this.getBooks}/>
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
