import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";


const MyReadsPage= ({bookShelve, updateBookShelve}) => {
		const read = bookShelve.filter(book => book.shelf === "read");
		const wantToRead = bookShelve.filter(book => book.shelf === "wantToRead");
		const currentlyReading = bookShelve.filter(book => book.shelf === "currentlyReading");

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							header={"Read"}
							books={read}
							updateBookShelve={updateBookShelve}
						/>

						<BookShelf
							header={"Want To Read"}
							books={wantToRead}
							updateBookShelve={updateBookShelve}
						/>

						<BookShelf
							header={"Currently Reading"}
							books={currentlyReading}
							updateBookShelve={updateBookShelve}
						/>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
          )
};

MyReadsPage.PropTypes = {
	bookShelve: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default MyReadsPage;