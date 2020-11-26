import React from 'react'
import AnswerOption from './AnswerOption'

const QuestionContainer = function (props) {
  return (
    <>
      <h2 className="titleContainer title">{props.title}</h2>
      <div class="optionContainer">
        {
          props.answers.map(answer => {
            return <AnswerOption text={answer.text} key={answer.id} />
          })
        }
      </div>
    </>
  )
}

export default QuestionContainer
