import React, { Component } from 'react';
import 'styles/App.css';
import Books from "components/Books";
import Title from "components/Title";
import Form from "components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchTerm) {
    if (searchTerm === "") {
      window.alert("Cannot find that book!!!");
      return;
    }
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
      .then(res => res.json())
      .then(data => {
        let list = [];
        const items = data.items;
        items.forEach(item => {
          let bookInfo = {};
          let info = item.volumeInfo;
          bookInfo.id = item.id;
          bookInfo.title = info.title;
          bookInfo.category = info.categories + "";
          bookInfo.author = info.authors ? info.authors + "" : "N/A";
          bookInfo.publisher = info.publisher;
          bookInfo.publishedDate = info.publishedDate;
          bookInfo.description = info.description;
          bookInfo.imageLink = info.imageLinks ? info.imageLinks.thumbnail : "images/book.png";
          bookInfo.infoLink = info.infoLink;
          bookInfo.rating = info.averageRating ? `${info.averageRating}` : "N/A";

          list.push(bookInfo);
        });
        this.setState({ books: list });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="row">
            <div className="col-sm-5 title-container">
              <Title />
            </div>
            <div className="col-sm-7 list-container">
              {/* <input onChange={this.searchHandle.bind(this)}
                  placeholder="search term"
                  className="mb-4" />
                <div className="list">
                  {this.state.books}
                </div> */}

              <Form onSubmit={this.handleSearch} />
              <Books bookList={this.state.books} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;