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
      startIndex: 0,
      numOfResults: 10,
      searchDisabled: false
    }
    this.setSearchTerm = this.setSearchTerm.bind(this)
  }
  
  setSearchTerm(searchTerm){
    this.setState({
      searchTerm: searchTerm,
      books: [],
      startIndex: 0,
      err: false,
      searchDisabled: true
    }, () => this.getBooks())
  }

  getBooks(){
    GetBooks(this.state.searchTerm, this.state.startIndex, this.state.numOfResults)
    .then(results => {
      if(results.totalItems == 0){
        this.setState({
          books: null,
          searchDisabled: false
        })
      }else if(results.items){
        this.setState({
          books: this.state.books.concat(results.items),
          searchDisabled: false
        })
      }
    }).catch(err => {
      console.log("Something went wrong:")
      console.log(err)
      this.setState({
        err: true,
        searchDisabled: false
      }) 
    })

  }

  handleScroll = (e) => {
    if(window.scrollY + window.innerHeight + 1 > document.body.clientHeight){
      this.setState({
        startIndex: this.state.startIndex+this.state.numOfResults
      }, () => this.getBooks())
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <main className="main-container">
        <SearchBar setSearchTerm={this.setSearchTerm} searchDisabled={this.state.searchDisabled}/>
        { this.state.err ? <span>Search failed. Please try again later.</span> : null}
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
