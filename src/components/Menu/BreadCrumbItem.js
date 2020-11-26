import React from 'react'

const BreadCrumbItem = function (props) {
    return (
        <li>
            <a href="#">
                <span className={props.icon}>
                    {props.text}
                </span>
            </a>
        </li>
    )
}

export default BreadCrumbItem 
