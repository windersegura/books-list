import PropTypes from "prop-types";

import "./bookcard.css";

export function BookCard({ book }) {
  return (
    <div className="book-card">
      <div>
        <img src={book.cover} alt="Cover book" />
      </div>
      <div>
        <strong>{book.title}</strong>
      </div>
      <div>
        <p>Author: {book.author.name}</p>
        {/* <p>Publish: {book.year}</p>
        <p>Pages: {book.pages}</p> */}
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};
