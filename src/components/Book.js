import React, { Component } from 'react';
import bookImg from "images/book.png"

class Books extends Component {

  handleView() {
    const url = this.props.bookInfo.infoLink;
    window.location.href = url;
  }

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
                <h3>{this.props.bookInfo.title}</h3>
                <p>{this.props.bookInfo.author}</p>
                <p>{this.props.bookInfo.description}</p>
                <button>
                  <a href={this.props.bookInfo.infoLink} target="_blank">View</a>
                </button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Books