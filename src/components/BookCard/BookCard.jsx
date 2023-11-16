import PropTypes from "prop-types";
import { useState } from "react";
import { ModalInfo } from "../ModalInfo/ModalInfo";

import "./bookcard.css";

export function BookCard({ book }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="book-card" onClick={handleModal}>
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
      {isOpen && <ModalInfo setIsOpen={setIsOpen} book={book}/>}
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired,
};
