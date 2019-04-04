import React from 'react'
import './Book.scss'

// var book = {
//     imageLinks: {
//         smallThumbnail: "http://books.google.com/books/content?id=igiDu_G2QTsC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//         thumbnail: "http://books.google.com/books/content?id=igiDu_G2QTsC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     title: "Flowers",
//     description: "This volume selects some of Alfred Noyes' best poems, treading the same whimsical Dreamland as many of the classic fantasy asuthors. This volume selects some of Alfred Noyes' best poems, treading the same whimsical Dreamland as many of the classic fantasy asuthors. This volume selects some of Alfred Noyes' best poems, treading the same whimsical Dreamland as many of the classic fantasy asuthors."
// }

export const Book = (props) => {
    console.log(props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.smallThumbnail : "aa");
    return (
    <li className="book-container">
        <div className="book">
            <figure className="book__cover">
                <img src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : ""} />
            </figure>
            <div className="book-info">
                <header className="book__title">{props.book.volumeInfo.title}</header>
                <p className="book__description">{props.book.volumeInfo.description ? props.book.volumeInfo.description : "No description provided"}</p>
            </div>
        </div>
    </li>
    )
}

// export const Book = (props) => (
//     <li className="book-container">
//         <div className="book">
//             <figure className="book__cover">
//                 {/* <img src={props.book.imageLinks.thumbnail ? props.book.imageLinks.thumbnail : ""} /> */}
//             </figure>
//             <div className="book-info">
//                 <header className="book__title">{props.book.title}</header>
//                 {/* <p className="book__description">{book.description}</p> */}
//             </div>
//         </div>
//     </li>
// )
// export const Book = (book) => {
//     console.log(book);
//     return <div></div>
// }