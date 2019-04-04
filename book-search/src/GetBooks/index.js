import React from 'react'
import { BookList } from '../BookList';


// const GetBooks = (e) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${e.target.value}&startIndex=0&maxResults=10`)
//     .then((response) => response.json())
//     .then((JSONresponse) => JSONresponse)   
// }

const GetBooks = (searchTerm) => fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&startIndex=0&maxResults=10`)
    .then((response) => response.json())
    // .then((JSONresponse) => {console.log(JSONresponse); return JSONresponse})   
    .then((JSONresponse) => JSONresponse)   

export default GetBooks