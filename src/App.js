import React, { Component } from 'react';
import book from './book.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const books = [
      {id: 1, title: "title 1", overview: "asfjewofasofjsd"},
      {id: 2, title: "title 2", overview: "asfjewofasofjsdsfda"},
      {id: 3, title: "title 3", overview: "asfdasfjewofasofjsd"},
      {id: 4, title: "title 4", overview: "tfdsihasfjewofasofjsd"}
    ]

    var bookRows = [];
    books.forEach(book => {
      let bookRow = <table key={book.id}>
        <tbody>
          <tr>
            <td>
              <img alt="" src=""/>
            </td>
            <td>
              {book.title}
            </td>
          </tr>
        </tbody>
      </table>
      bookRows.push(bookRow);
    });

    this.state = {books: bookRows}
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="book" src={book} />
              </td>
              <td>
                <h1>Google Books Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input style={{
          fontSize: 24,
          display: "block",
          width: "100%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="enter search term"/>

        {this.state.books}

      </div>
    );
  }
}

export default App;
