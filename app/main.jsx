'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Main from './components/Main'
//import Root from './components/Root'

render(
  <Provider store={store}>
    {/* <Root /> */}
    <Main />
  </Provider>,
  document.getElementById('main')
)
