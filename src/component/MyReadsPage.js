import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";


const MyReadsPage= ({bookShelve, updateBookShelve}) => {
		const read = bookShelve.filter(book => book.shelf === "read");
		const wantToRead = bookShelve.filter(book => book.shelf === "wantToRead");
		const currentlyReading = bookShelve.filter(book => book.shelf === "currentlyReading");
  		const shelves=[{title:'Read', books: read}, {title:'Currently Reading', books: currentlyReading}, {title:'Want To Read', books: wantToRead}];

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
                      {shelves.map((shelf, index) => { return(
						<BookShelf
							header={shelf.title}
							books={shelf.books}
							updateBookShelve={updateBookShelve}
							key={index}
						/>
                      )})}



					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Search</Link>
				</div>
			</div>
          )
};

MyReadsPage.PropTypes = {
	bookShelve: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default MyReadsPage;
