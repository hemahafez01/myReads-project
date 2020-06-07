import React from "react";
import PropTypes from "prop-types";
import book from "./book";

const bookDisplay = ({books, updateBookShelve}) => {
                    return (<ol className="books-grid">
                      {books.map((book, index) => { 
							return (<book
								book={book}
								//key= {index}
								updateBookShelve={updateBookShelve}
								/> );})}
					</ol> )
}

bookDisplay.PropTypes = {
	books: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default bookDisplay;