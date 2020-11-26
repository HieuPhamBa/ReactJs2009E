import React from 'react'
import BreadCrumbItem from './BreadCrumbItem'
import './BreadCrumb.css'

const BreadCrumb = function (props) {
  const menusItems = props.menus

  return (
    <ul id="breadcrumb" >  {
      menusItems.map(item => {
        return <BreadCrumbItem icon={item.icon}
          text={item.text}
          key={item.id}
        />
      })
    } </ul>
  )
}

export default BreadCrumb