import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import  BookList from './BookList';
import  BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books:[],
      listBooks:[]

  };
componentDidMount(){
        BooksAPI.getAll().then((books)=>{
            this.setState({listBooks:books})
        })

}



  updateBooks(book,shelf){
      BooksAPI.update(book,shelf).then((book)=>{
          this.setState(state=>({
              listBooks:state.listBooks.concat(book)
          }))
      })
  }
  searchBooks(query){
      BooksAPI.search(query).then((books)=>{
          this.setState({books})
      })
  }

  render() {
    return (
        <div>
          <Route exact path="/" render={()=>(
              <BookList
                books={this.state.listBooks}
                onUpdateBook={(book,shelf)=>{this.updateBooks(book,shelf)}}
              />
          )}/>
          <Route path="/search" render={()=>(
              <BookSearch
                  onUpdateBook={(book,shelf)=>{this.updateBooks(book,shelf)}}
                  onSearchBook={(query)=>{this.searchBooks(query)}}
                  books={this.state.books}
              />
          )}/>
        </div>

    )
  }
}

export default BooksApp
