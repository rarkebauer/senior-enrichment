'use strict'
import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
import {fetchCampuses} from './reducers'
//import Root from './components/Root'

class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchCampuses())
  }

  render(){
    return(
    <Provider store={store}>
      {/* <Root /> */}
      <Main />
    </Provider>
  )
 }
}

ReactDOM.render(
  <Root />,
  document.getElementById('main')
)
