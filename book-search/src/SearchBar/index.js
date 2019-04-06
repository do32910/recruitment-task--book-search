import React from 'react'
import './SearchBar.scss'

export const SearchBar = (props) => {
    let searchTerm = React.createRef();

    function handleSearch(){
        props.setSearchTerm(searchTerm.current.value)
    }

    return (
        <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-bar__input" ref={searchTerm}/>
        <button className="search-bar__btn" onClick={handleSearch}>Search</button>
        </div>)
    }