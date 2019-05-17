import axios from 'axios'

const api = "https://reactnd-books-api.udacity.com"

export const getBooks = () => 
   
    axios.get(api+'/books',{
        headers:{
              'Accept':'application/json',
              'Authorization': 'kruthi'
        }
      
    })
    .then((res) => { 
        
        console.log(res.data.books)
        return res.data.books
        //console.log("Bookslist=="+JSON.stringify(bookslist))
    })
   
   // return bookslist

