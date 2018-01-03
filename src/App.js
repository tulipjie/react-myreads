import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import  BookList from './BookList';
import  BookSearch from './BookSearch'

class BooksApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            books:[],
            listBooks:[]
        }
    }
componentDidMount(){
    //在dom加载完成后，获取书籍信息
        BooksAPI.getAll().then((books)=>{
            this.setState({listBooks:books})
        })

}

  updateBooks(book,shelf){
    if(book.shelf !== shelf){
        BooksAPI.update(book,shelf).then(()=>{
            book.shelf=shelf;
            this.setState(state=>({
                //先剔除掉原来的book然后再在后面添加，这样就能更新书籍的shelf状态
                listBooks:state.listBooks.filter(b=>b.id!==book.id).concat([book])
            }))
        })
    }

  }
  //搜索功能
  searchBooks(query){
      BooksAPI.search(query).then((books)=>{
          let results=books.map(book=>{
              let bookOnShelf=this.state.listBooks.find(c=>c.id===book.id);
              book.shelf=bookOnShelf?bookOnShelf.shelf:'none';
              return book;
          });
          this.setState({books:results})
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
