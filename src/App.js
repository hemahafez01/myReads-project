import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import myReadsPage from './component/myReadsPage'
import searchPage from './component/searchPage'

class BooksApp extends React.Component {
  state = {
    books: [],
    bookShelve: []
  }

  componentDidMount() {
   this.getBookShelve(); 
  }

  getBookShelve = () => {
    BooksAPI.getall().then(bookshelve => this.setState({ bookshelve }));
  }

  searchBook = query => {
    BooksAPI.search(query, 20).then(
      books => {
        if (!Array.isArray(books)) books=[];
        let bookShelve= this.state.bookShelve;
        books.map(book => {
          let _book = bookShelve.find(item => item.id === book.id);
          if (_book) book.shelf = _book.shelf;
          return book;
        });
        this.setState({ books });
      }
      );
  }

  updateBookShelve= (book, shelf) => {
   if (book.shelf !== shelf ) {
    BooksAPI.update(book, shelf).then(response => {
     book.shelf = shelf;
     this.getBookShelve();
     this.setState(state => ({
     book: state.books.filter(b => b.id !== book.id).concat([book])
     }));
    });
   }
  };

  clearSearchPage = () => {
   this.setState({books: [] }); 
  };

  render() {
    return (
      <div className="app">
        <Route
          exactpath= "/"
          render = {() => 
            <myReadsPage
              bookShelve= {this.state.bookShelve}
              updateBookShelve= {(book, shelf) => {
               this.updateBookShelve(book, shelf);
              }}
             />}
        />
      <Route
        path= "/search"
        render = {() => 
          <searchPage
             books= {this.state.books}
             searchBook = { query => {
                           this.searchBook(query);
                          }}
             updateBookShelve= {(book, shelf) => {
              this.updateBookShelve(book, shelf);
                               }}
             clearSearchPage= {() => {
              this.clearSearchPage();
             }}
           />}
      />
      </div>
       
    );
  }
}

export default BooksApp
