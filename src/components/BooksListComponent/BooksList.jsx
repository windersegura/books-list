import PropTypes from "prop-types";
import { BookCard } from "../BookCard/BookCard";

import './bookslist.css'

export function BooksList(props) {
  const { content } = props;

  return (
    <div>
      <div>
        <h3>Lista de Libros</h3>
      </div>

      <div>
        <ul>
          {content.library.map((b, i) => (
            <li key={i}>{<BookCard book={b.book}/>}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

BooksList.propTypes = {
  content: PropTypes.object.isRequired,
};
