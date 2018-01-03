/**
 * Created by sxy on 2017/12/17.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class BookList extends Component{
    static propTyps={
        books:PropTypes.array.isRequired,
        onUpdateBook:PropTypes.func.isRequired,
        onSearchBook:PropTypes.func.isRequired
    };
    state={
        shelf:''
    };
    updateShelf=(book,shelf)=>{
        this.setState({shelf:shelf});
        if(shelf){
            this.props.onUpdateBook(book,shelf)
        }
    };

    render(){
        const {books}=this.props;
        return (
            <div className="app">
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books">

                                        <ol className="books-grid">
                                            {books.filter(book=>book.shelf==="currentlyReading").map((book)=>(
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
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {books.filter(book=>book.shelf==="wantToRead").map((book)=> (
                                                        <li key={book.id}>
                                                            <div className="book">
                                                                <div className="book-top">
                                                                    <div className="book-cover" style={{  backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                                                    <div className="book-shelf-changer">
                                                                        <select onChange={(event)=>this.updateShelf(book,event.target.value)} defaultValue="wantToRead">
                                                                            <option value="none" disabled>Move to...</option>
                                                                            <option value="currentlyReading">Currently Reading</option>
                                                                            <option value="wantToRead" >Want to Read</option>
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
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {books.filter(book=>book.shelf==="read").map((book)=>(
                                                        <li key={book.id}>
                                                            <div className="book">
                                                                <div className="book-top">
                                                                    <div className="book-cover" style={{  backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                                                    <div className="book-shelf-changer">
                                                                        <select onChange={(event)=>this.updateShelf(book,event.target.value)} defaultValue="read">
                                                                            <option value="none" disabled>Move to...</option>
                                                                            <option value="currentlyReading">Currently Reading</option>
                                                                            <option value="wantToRead">Want to Read</option>
                                                                            <option value="read" >Read</option>
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
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to='/search' >Add a book</Link>
                        </div>


                    </div>
            </div>
        )
    }
}

export default BookList;