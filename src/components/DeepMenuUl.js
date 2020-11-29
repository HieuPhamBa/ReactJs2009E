import React, { Component } from 'react'
import DeepMenuLi from './DeepMenuLi'

class DeepMenuUl extends Component {
  render() {
    const items = this.props.items

    return (
      <ul>
        {
          items.map(item => <DeepMenuLi item={item} />)
        }
      </ul>
    )
  }
}

export default DeepMenuUl
