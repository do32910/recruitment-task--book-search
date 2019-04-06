import React from 'react'
import { Book } from '../Book'

import './BookList.scss'

export const BookList = (props) => {
    const books = props.books
    console.log(books)
    if(books !== null){
        return <ul className="book-list">{props.books.map((book) => <Book book={book} key={book.id}/>)}</ul> 
    }else{
        return <p className="no-results-message">No results found</p>
    }
}
