import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

import bookDisplay from "./bookDisplay";

class searchPage extends Component {
  static PropTypes={
    books: PropTypes.array.isRequired,
    searchBook: PropTypes.func.isRequired,
    updateBookShelve: PropTypes.func.isRequired,
    clearSearchPage: PropTypes.func.isRequired,
  };

  state ={
    query: ""
  };

  componentWillUnmount(){
    this.props.clearSearchPage()
  }

  updateQuery = query => {
    this.setState({ query: query })
    this.props.searchBook(query)
  }

  render (){
    const {books, updateBookShelve} = this.props;
    const {query} = this.state;
    return (
			<div className="search-books">
				<div className="search-books-bar">
					<link to="/" className="close-search">Close</link>
					<div className="search-books-input-wrapper">
						<input 
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={event => 
                                       this.updateQuery(event.target.value)}
							/>
					</div>
				</div>
				<div className="search-books-results">
					<bookDisplay
					books={books}
					updateBookShelve={updateBookShelve}
					/>
				</div>
			</div>
      );
};
}

export default searchPage;