import React from 'react';
import ReactDOM from 'react-dom';
import {getBooks} from '../API/Api'
import './BookList.css'

export default class BookList extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         books:[]
    //     }
     
    // }

    // componentDidMount(){
    //     // const getbooks = getBooks()
    //     // console.log("GetBooks==="+getbooks)
    //     getBooks().then((data)=>{
                
    //             console.log("Data=="+JSON.stringify(data))
    //             this.setState({
    //                 books: data
    //             })
    //         console.log("books"+JSON.stringify(this.state))
            
    //     });
        
    // }
    // changeShelf = (book,event) => {
    //     console.log("Event data"+event.target.value+"............"+JSON.stringify(book))
        
    // }
    
    render(){
        let booklist = []
        {this.props.books.map((book) =>{

            
            booklist.push(
            <li className="list" key={book.title}>
                   
                        <img className="img-style" src = {book.imageLinks.smallThumbnail} />
                        <select className="drop-down">
                            <option value="Read">Read</option>
                            <option value="Want to read">Want to read</option>
                            <option value="Reading">Reading</option>
                            <option value="None">None</option>
                        </select>
                       <p className="para"> {book.title} </p>
            </li>
            )
            })}
       
        return(<div>
                <h2 style={{float:'left',paddingLeft:45}}>{this.props.title}</h2>
                <hr style={{clear:'left'}}/>
                <div style={{clear:'left'}}></div>
                    <ul style={{overflow:'auto'}}>
                        {booklist}
                    </ul>
                  
                </div>)
    }
}