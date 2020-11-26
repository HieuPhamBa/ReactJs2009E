import React from 'react'
import HeaderForm from './HeaderForm'
import FooterForm from './FooterForm'
import QuestionContainer from './QuestionContainer'
import './ReactQuiz.css'

const QuestBox = function (props) {
  return (
    <section className="container">
      <div className="questionBox" id="app">
        <transition mode="out-in">
          <div class="questionContainer">
            <HeaderForm />
            <QuestionContainer answers={props.question.answers} title={props.question.title} />
            <FooterForm />
          </div>
        </transition>
      </div>
    </section>
  )
}

export default QuestBox
