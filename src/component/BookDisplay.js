import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";


const BookDisplay = ({books, updateBookShelve}) => {
                    return (<ol className="books-grid">
                      {books.map((book, index) => { 
							return (<Book
								book={book}
								key={index}
								updateBookShelve={updateBookShelve}
								/> );})}
					</ol> )
}

BookDisplay.PropTypes = {
	books: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default BookDisplay;