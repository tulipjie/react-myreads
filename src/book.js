/**
 * Created by sxy on 2018/1/3.
 */
import React,{Component} from 'react';
class Book extends Component{
    render(){

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                        {books.filter(book=>book.shelf===this.props.onShelf).map((book)=>(
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{  backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={(event)=>this.updateShelf(book,event.target.value)} defaultValue="currentlyReading">
                                                    <option value="none" disabled>Move to...</option>
                                                    <option value="currentlyReading" >Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            )

                        )}

                    </ol>
                </div>
            </div>
            )

    }
}
