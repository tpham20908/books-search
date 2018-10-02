import React, { Component } from 'react';
import $ from "jquery";
import bookImg from 'images/book.png';
import 'styles/App.css';
import Book from "components/Book";

class App extends Component {
  constructor(props) {
    super(props);

    /*
    const books = [
      {id: 1, title: "title 1", overview: "asfjewofasofjsd"},
      {id: 2, title: "title 2", overview: "asfjewofasofjsdsfda"},
      {id: 3, title: "title 3", overview: "asfdasfjewofasofjsd"},
      {id: 4, title: "title 4", overview: "tfdsihasfjewofasofjsd"}
    ]

    var bookRows = [];
    books.forEach(book => {
      let bookRow = <Book info={book}/>
      bookRows.push(bookRow);
    });

    this.state = {books: bookRows}
    */

    this.state = {}
    // this.performSearch("learn java");
  }

  performSearch(searchTerm) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;
    /*
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const items = data.items;
        items.forEach(item => {
          let bookInfo = {};
          let info = item.volumeInfo;
          bookInfo.id = item.id;
          bookInfo.title = info.title;
          bookInfo.category = info.categories + "";
          bookInfo.author = info.authors+ "";
          bookInfo.publisher = info.publisher;
          bookInfo.publishedDate = info.publishedDate;
          bookInfo.description = info.description;
          bookInfo.imageLink = info.imageLinks;
          bookInfo.infoLink = info.infoLink;

          // let bookRow = <Book bookInfo={bookInfo} />
          // bookRows.push(bookRow);
          console.log(bookInfo.id + " " + bookInfo.imageLink.thumbnail);
        });
      });
    */
    $.ajax({
      url: url,
      success: (searchResult) => {
        let bookRows = [];
        const items = searchResult.items;
        items.forEach(item => {
          let bookInfo = {};
          let info = item.volumeInfo;
          bookInfo.id = item.id;
          bookInfo.title = info.title;
          bookInfo.category = info.categories + "";
          bookInfo.author = info.authors+ "";
          bookInfo.publisher = info.publisher;
          bookInfo.publishedDate = info.publishedDate;
          bookInfo.description = info.description;
          //TODO: cannot get thumbnail in this obj
          // bookInfo.imageLink = info.imageLinks;
          bookInfo.infoLink = info.infoLink;

          let bookRow = <Book key={bookInfo.id} bookInfo={bookInfo} />
          bookRows.push(bookRow);
          // console.log(bookInfo.id + " " + bookInfo.imageLink.thumbnail);
        });
        // console.log(bookRows);
        this.setState({books: bookRows});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }

  searchHandle(event) {
    const searchTerm = event.target.value ? event.target.value : "Narcity" ;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="book" src={bookImg} />
              </td>
              <td>
                <h1>Google Books Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input onChange={this.searchHandle.bind(this)} placeholder="enter search term" />

        {this.state.books}
      </div>
    );
  }
}

export default App;
