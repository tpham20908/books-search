import React, { Component } from 'react';

class Books extends Component {
  render() {
    return (
      <div className="row mb-3 ml-2">
        <img className="col-sm-4 img-fluid img-thumbnail"
          src={this.props.bookInfo.imageLink}
          alt={this.props.bookInfo.title} />
        <div className="col-sm-8">
          <h5 className="card-title">{this.props.bookInfo.title}</h5>
          <h6>Author(s): {this.props.bookInfo.author}</h6>
          <p>Published: {this.props.bookInfo.publishedDate}</p>
          <p>Publisher: {this.props.bookInfo.publisher}</p>
          <p>Rating: {this.props.bookInfo.rating}</p>
          <a href={this.props.bookInfo.infoLink}
            className="btn btn-primary btn-lg btn-block"
            target="_blank"
            rel="noopener noreferrer">Details</a>
        </div>
      </div>
    )
  }
}

export default Books
