import React from "react";
import PropTypes from "prop-types";

import bookDisplay from "./bookDisplay";


const bookShelve = ({header, books, updateBookShelve}) => {
                <div className="bookshelf">
                   <h2 className="bookshelf-title">{header}</h2>
                    <div className="bookshelf-books">
						<bookDisplay
							books= {books}
							updateBookShelve= {updateBookShelve}
						/>
                    </div>
				</div>
};

bookShelve.PropTypes = {
	header: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default bookShelve;