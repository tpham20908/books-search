import React, { Component } from 'react';
import bookImg from "images/book.png"

class Books extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {/* <img alt="poster" src={this.props.bookInfo.imageLink} /> */}
                <img alt="poster" src={bookImg} />
              </td>
              <td>
                {this.props.bookInfo.title}
                <p>{this.props.bookInfo.author}</p>
                <p>{this.props.bookInfo.description}</p>
                <a href={this.props.bookInfo.infoLink}>Info Link</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Books