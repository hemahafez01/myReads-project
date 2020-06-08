import React from "react";
import PropTypes from "prop-types";

import BookShelfChanger from "./BookShelfChanger";

const Book= ({book, updateBookShelve}) => {
const default_img = `http://books.google.com/books/content?id=\
    a_asDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

return (
  <li>
	<div className="book">
        <div className="book-top">
          <div className="book-cover" 
              style={
              { width: 128, height: 193, backgroundImage: `url("${(Book.imageLinks && Book.imageLinks.thumbnail) || default_img}")` 
              }}>
          </div>
          <div className="book-shelf-changer">
              <BookShelfChanger
                  book={Book}
                  updateBookShelve={updateBookShelve}
                  />
          </div>
		</div>
		<div className="book-title">{Book.title}</div>
		<div className="book-authors">{Book.authors ? Book.authors.join(", ") : " " }</div>
	</div>
</li>
  );
};
Book.PropTypes = {
    Book: PropTypes.object.isRequired,
    updateBookShelve: PropTypes.func.isRequired
};

export default Book;