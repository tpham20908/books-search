import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    this.props.onSubmit(searchTerm);
  }

  render() {
    return (
      <div className="mb-4 pl-3 pr-3">
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr className="row">
                <td className="col-sm-10" >
                  <input type="text" value={this.state.searchTerm} onChange={this.onChange} />
                </td>
                <td className="col-sm-2">
                  <button type="submit" className="btn btn-primary btn-lg">Search</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default Form;