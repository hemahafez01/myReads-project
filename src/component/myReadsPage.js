import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import bookShelf from "./bookShelf";

const myReadsPage= ({bookShelve, updateBookShelve}) => {
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
						<bookShelf
							header={"Read"}
							books={read}
							updateBookShelve={updateBookShelve}
						/>

						<bookShelf
							header={"Want To Read"}
							books={wantToRead}
							updateBookShelve={updateBookShelve}
						/>

						<bookShelf
							header={"Currently Reading"}
							books={currentlyReading}
							updateBookShelve={updateBookShelve}
						/>
					</div>
				</div>
				<div className="open-search">
					<link to="/search">Add a book</link>
				</div>
			</div>
          )
};

myReadsPage.propTypes = {
	bookShelf: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default myReadsPage;