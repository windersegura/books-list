import PropTypes from "prop-types";
import "./modal.css";

export function ModalInfo({ setIsOpen, book }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)}>
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h3 className="heading">{book.title}</h3>
            </div>
            <div className="modalContent">
              <div>
                <p><strong>Genero:</strong> {book.genre}</p>
                <p><strong>Paginas:</strong> {book.pages}</p>
                <p><strong>Sinopsis:</strong> {book.synopsis}</p>
                <p><strong>Publicacion:</strong> {book.year}</p>
                <p><strong>ISBN:</strong> {book.ISBN}</p>
              </div>
              <div className="modalBookCover">
                <img src={book.cover} alt="Book Cover" />
              </div>
            </div>
            <div>
                <button>Agregar Lista Lectura</button>
            </div>
              
          </div>
        </div>
      </div>
    </>
  );
}

ModalInfo.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};
