import React from 'react'
import { BookList } from '../BookList';

const GetBooks = (searchTerm, pageNumber) => fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&startIndex=${pageNumber}&maxResults=10`)
    .then((response) => response.json())
    // .then((JSONresponse) => {console.log(JSONresponse); return JSONresponse})   
    .then((JSONresponse) => JSONresponse)  

export default GetBooks