import React from 'react'
import './SearchBar.scss'

export const SearchBar = (props) => {
    return (
        <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-bar__input" onChange={(e) => props.getBooks(e.target.value)}/>
        <button className="search-bar__btn" >Search</button>
        </div>)
    }