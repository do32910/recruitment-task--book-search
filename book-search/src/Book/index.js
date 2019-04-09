import React from 'react'
import './Book.scss'

export const Book = (props) => {
    return (
    <li className="book-container">
        <div className="book">
            <figure className="book__cover">
                { props.book.volumeInfo.imageLinks ? <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title} className="book__cover-img"/> : <span className="book__cover-img unavailable-info">No image provided</span>}
            </figure>
            <div className="book-info">
                <header className="book__title">{props.book.volumeInfo.title}</header>
                <p className="book__description">{props.book.volumeInfo.description ? props.book.volumeInfo.description.replace(/^(.{100}[^\s]*).*/, "$1") + "(...)" : <span className="unavailable-info">No description provided</span>}</p>
            </div>
        </div>
    </li>
    )
}
