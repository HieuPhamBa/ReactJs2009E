import './App.css'
import BreadCrumb from './components/Menu/BreadCrumb'
import QuestionBox from './components/Quiz/QuestionBox'

const menus = [{
  id: 1,
  text: '',
  icon: 'icon icon-home'
}, {
  id: 2,
  text: 'Project',
  icon: 'icon icon-beaker'
}, {
  id: 3,
  text: 'Breadcrumb',
  icon: 'icon icon-double-angle-right'
}, {
  id: 4,
  text: 'Getting started',
  icon: 'icon icon-rocket'
}, {
  id: 5,
  text: 'Download',
  icon: 'icon icon-arrow-down'
}]

const question = {
  title: 'What is the full form of HTTP?',
  answers: [{
    text: 'a .Hyper text transfer package',
    id: 8
  }, {
    text: 'b. Hyper text transfer protocol',
    id: 9
  }, {
    text: 'c. Hyphenation text test program',
    id: 10
  }, {
    text: 'd. None of the above',
    id: 11
  }]
}

function App() {
  return (
    <>
      <BreadCrumb menus={menus} /> 
      <QuestionBox question={question} />
    </>
  )
}

export default App
