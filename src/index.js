import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import es from 'date-fns/locale/es'
import AuthLayout from 'layouts/Auth/Auth'
import AdminLayout from 'layouts/Admin/Admin'
import 'assets/scss/material-ui-react.scss?v=1.0.0'
import { ThemeProvider, createTheme } from '@material-ui/core'

axios.defaults.baseURL = process.env.REACT_APP_API

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    // fontSize: 14,
    // htmlFontSize: 18,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
        <BrowserRouter>
          <Switch>
            <Route path='/auth' component={AuthLayout} />
            <Route path='/admin' component={AdminLayout} />
            <Redirect from='/' to='/auth/login' />
          </Switch>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
