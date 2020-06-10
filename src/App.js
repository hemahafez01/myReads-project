import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI.js'
import './App.css'
import MyReadsPage from './component/MyReadsPage'
import SearchPage from './component/SearchPage'

//function check(test){ console.log(test)};

class BooksApp extends React.Component {
  state = {
    books: [],
    bookShelve: []
  }
  
  componentDidMount() {
   BooksAPI.getAll().then(books => { console.log(books)
                          this.setState({ books })});
  }

  searchBook = (query) => {
    BooksAPI.search(query, 30).then(
      books => {
        if (!Array.isArray(books)) {books=[]};
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
   let books=this.state.books;
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.get(book.id).then(book => {
      let newBooks=books.filter(b => b.id !== book.id);
        this.setState({ books: [...newBooks, book]
      })
      })
    })
  }
     /*book.shelf = shelf;
     this.getBookShelve();
     this.setState(state => ({
     book: state.books.filter(b => b.id !== book.id).concat([book])
     }));
    });
   }
  };*/

  clearSearchPage = () => {
   this.setState({books: [] }); 
  };

  render() {
    return (
     <Router>
      <div className="app">
        <Route
          exactpath="/"
          render={() => 
            < MyReadsPage bookShelve={this.state.books} updateBookShelve={(book, shelf) => this.updateBookShelve(book, shelf)} /> }
        />
      <Route
        path="/search"
        render={() => 
          <SearchPage
             books={this.state.books}
             searchBook={ (query) => {
                           this.searchBook(query);
                          }}
             updateBookShelve={(book, shelf) => {
              this.updateBookShelve(book, shelf);
                               }}
             clearSearchPage={() => {
              this.clearSearchPage();
             }}
           />}
      />
      </div>
     </Router>
    );
  }
}

export default BooksApp;
