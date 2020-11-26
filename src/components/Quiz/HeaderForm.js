import React from 'react'

const HeaderForm = function (props) {
  return (
    <header>
      <h1 className="title is-6">ReactQuiz</h1>
      <div className="progressContainer">
        <progress className="progress is-info is-small"> </progress>
        <p>0%</p>
      </div>
    </header>
  )
}

export default HeaderForm
