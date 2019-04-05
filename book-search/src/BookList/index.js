import React from 'react'
import { Book } from '../Book'

import './BookList.scss'

export const BookList = (props) => {
    const books = props.books
    if(books){
        return <ul className="book-list">{props.books.map((book) => <Book book={book}/>)}</ul> 
    }else{
        return <div>ajkoj</div>
    }
}
