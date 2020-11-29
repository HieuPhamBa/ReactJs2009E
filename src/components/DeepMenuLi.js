import React, { Component } from 'react'
import DeepMenuUl from './DeepMenuUl'

class DeepMenuLi extends Component {
  render() {
    const item = this.props.item

    return (
      <li>
        <a href={item.link} className={item.isActive ? 'active' : ''}>
          <i className={item.icon}></i>
          <strong>{item.title}</strong>
          <small>{item.subTitle}</small>
        </a>
        {
          item.children ? <DeepMenuUl items={item.children} /> : ''
        }
      </li>
    )
  }
}

export default DeepMenuLi