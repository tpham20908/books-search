import React, { Component } from 'react';
import bookImg from "images/book.png"

class Books extends Component {
  render() {
    return (
        <div className="row mb-3 ml-2">
          <img className="col-md-4 img-fluid img-thumbnail"
            src={this.props.bookInfo.imageLink}
            alt={this.props.bookInfo.title} />
          <div className="col-md-8">
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
      // <div className="col-md-6">
      //   <div className="card mb-2">
      //     <img className="card-img-top img-fluid img-thumbnail"
      //       src={this.props.bookInfo.imageLink}
      //       alt={this.props.bookInfo.title} />
      //     <div className="card-body">
      //       <h4 className="card-title">{this.props.bookInfo.title}</h4>
      //       <h5 className="card-title">{this.props.bookInfo.author}</h5>
      //       <p className="card-text">Published: {this.props.bookInfo.publishedDate}</p>
      //       <p className="card-text">Publisher: {this.props.bookInfo.publisher}</p>
      //       <a href={this.props.bookInfo.infoLink}
      //         className="btn btn-primary btn-lg btn-block"
      //         target="_blank"
      //         rel="noopener noreferrer">Details</a>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default Books
