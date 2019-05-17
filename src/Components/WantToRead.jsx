import React from 'react'

export default class WantToRead extends React.Component{
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
                <h2 style={{float:'left',paddingLeft:45}}>Want To Read</h2>
                <hr style={{clear:'left'}}/>
                <div style={{clear:'left'}}></div>
                    <ul style={{overflow:'auto'}}>
                        {booklist}
                    </ul>
                  
                </div>)
    }
}