import React from 'react'
import { Book } from '../Book'

import './BookList.scss'

// var books = [{
//     imageLinks: {
//         smallThumbnail: "http://books.google.com/books/content?id=igiDu_G2QTsC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//         thumbnail: "http://books.google.com/books/content?id=igiDu_G2QTsC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     title: "Flowers",
//     description: "This volume selects some of Alfred Noyes' best poems, treading the same whimsical Dreamland as many of the classic fantasy asuthors. This volume selects some of Alfred Noyes' best poems, treading the same whimsical Dreamland as many of the classic fantasy asuthors. This volume selects some of Alfred Noyes' best poems, treading the same whimsical Dreamland as many of the classic fantasy asuthors."
// }]

export const BookList = (props) => {
    const books = props.books.items
    if(books){
        return <ul className="book-list">{props.books.items.map((book) => <Book book={book}/>)}</ul> 
    }else{
        return <div>ajkoj</div>
    }
}
