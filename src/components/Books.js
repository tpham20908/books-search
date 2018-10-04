import React, { Component } from 'react'

class Books extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bookItem = this.props.bookList.map(book => (
      <div key={book.id} className="row mb-3 ml-2">
        <img className="col-sm-4 img-fluid img-thumbnail"
          src={book.imageLink}
          alt={book.title} />
        <div className="col-sm-8">
          <h5 className="card-title">{book.title}</h5>
          <h6>Author(s): {book.author}</h6>
          <p>Published: {book.publishedDate}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Rating: {book.rating}</p>
          <a href={book.infoLink}
            className="btn btn-primary btn-lg btn-block"
            target="_blank"
            rel="noopener noreferrer">Details</a>
        </div>
      </div>
    ));

    return (
      <div className="list">
        {bookItem}
      </div >
    )
  }
}

export default Books;