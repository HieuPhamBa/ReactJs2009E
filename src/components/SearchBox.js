import React, { Component } from 'react'

class SearchBox extends Component {
  render() {
    return (
      <li className="float">
        <a className="search">
          <input type="text" value="search ..." />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </a>
        <a href="" className="search-mobile">
          <i className="fa fa-search"></i>
        </a>
      </li>
    )
  }
}

export default SearchBox
