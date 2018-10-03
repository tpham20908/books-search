import React, { Component } from 'react';
import bookImg from "images/book.png";

class Title extends Component {
  render() {
    return (
      <div>
        <h2>Search Books</h2>
        <blockquote>
          <p>He who studies old books will always find in them something new, and he who reads new books will always find in them something old.</p>
          <footer><cite>Edward Bulwer-Lytton</cite></footer>
          </blockquote>
      </div>
    )
  }
}

export default Title;