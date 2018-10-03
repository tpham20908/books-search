import React, { Component } from 'react';
import $ from "jquery";
import 'styles/App.css';
import { APIKEY, URL } from "config";
import Book from "components/Book";
import Title from "components/Title";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  performSearch(searchTerm) {
    const url = URL + searchTerm;
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
          bookInfo.author = info.authors + "";
          bookInfo.publisher = info.publisher;
          bookInfo.publishedDate = info.publishedDate;
          bookInfo.description = info.description;
          bookInfo.imageLink = info.imageLinks ? info.imageLinks.thumbnail : "images/book.png";
          bookInfo.infoLink = info.infoLink;
          bookInfo.rating = `${info.averageRating}`;

          let bookRow = <Book key={bookInfo.id} bookInfo={bookInfo} />
          bookRows.push(bookRow);
        });
        this.setState({ books: bookRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }

  searchHandle(event) {
    const searchTerm = event.target.value ? event.target.value : " ";
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-5 title-container">
                <Title />
              </div>
              <div className="col-md-7 list-container">
                <input onChange={this.searchHandle.bind(this)}
                  placeholder="search term"
                  className="mb-4" />
                  {this.state.books}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;