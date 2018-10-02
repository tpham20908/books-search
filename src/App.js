import React, { Component } from 'react';
import book from './book.png';
import './App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
