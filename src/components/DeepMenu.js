import React, { Component } from 'react'
import { deepMenu } from '../deepMenu'
import DeepMenuLi from './DeepMenuLi'
import SearchBox from './SearchBox'

class DeepMenu extends Component {
  render() {
    return (
      <div class="container">
        <nav id="menu">
          <ul class="mcd-menu">
            {
              deepMenu.map(item => <DeepMenuLi item={item} />)
            }
            <SearchBox />
          </ul>
        </nav>
      </div>
    )
  }
}

export default DeepMenu
