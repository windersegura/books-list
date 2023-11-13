import { Header } from "./components/HeaderComponent";
import { BooksList } from "./components/BooksListComponent";
import books from './data/books.json';

import './app.css'

function App() {
  return (
    <main>
      <header className="header-app">
        <Header />
      </header>
      <article>
        <BooksList content={books}/>
      </article>
    </main>
  );
}

export default App;
