const GetBooks = (searchTerm, pageNumber, numOfResults) => 
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&startIndex=${pageNumber}&maxResults=${numOfResults}`)
    .then((response) => response.json())
    .then((JSONresponse) => JSONresponse)   
    .then((JSONresponse) => JSONresponse)  
export default GetBooks