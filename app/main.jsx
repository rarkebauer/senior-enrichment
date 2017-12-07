'use strict'
import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
import {fetchCampuses, fetchStudents} from './reducers'

class Root extends Component {
  componentDidMount(){
    store.dispatch(fetchCampuses())
    store.dispatch(fetchStudents())
  }

  render(){
    return(
    <Provider store={store}>
      <Main />
    </Provider>
  )
 }
}

ReactDOM.render(
  <Root />,
  document.getElementById('main')
)
