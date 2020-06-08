import React from "react";
import PropTypes from "prop-types";

import BookDisplay from "./BookDisplay";


const BookShelve = ({header, books, updateBookShelve}) => {
                return (<div className="bookshelf">
                   <h2 className="bookshelf-title">{header}</h2>
                    <div className="bookshelf-books">
						<BookDisplay
							books={books}
							updateBookShelve={updateBookShelve}
						/>
                    </div>
				</div>
)};

BookShelve.PropTypes = {
	header: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default BookShelve;