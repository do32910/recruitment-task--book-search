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
    this.setSearchTerm = this.setSearchTerm.bind(this)
  }
  
  setSearchTerm(searchTerm){
    this.setState({
      searchTerm: searchTerm,
      books: []
    }, () => this.getBooks())
  }

  getBooks(){
    GetBooks(this.state.searchTerm, this.state.startIndex)
    .then(results => {
      if(results.totalItems == 0){
        this.setState({
          books: null
        })
      }else{
        this.setState({
          books: this.state.books.concat(results.items)
        })
      }
    })
  }

  handleScroll = (e) => {
    if(window.scrollY + window.innerHeight + 1 > document.body.clientHeight){
      this.setState({
        startIndex: this.state.startIndex+10
      }, () => this.getBooks())
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <main className="main-container">
        <SearchBar setSearchTerm={this.setSearchTerm}/>
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
