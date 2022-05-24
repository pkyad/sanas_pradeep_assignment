import '../styles/globals.css'
import Context from '../shared/Context';
import { useReducer } from 'react';
import initialState from '../shared/State'
import reducer from '../shared/Reducer';
import actions from '../shared/Actions';
import Router from 'next/router'


function MyApp({ Component, pageProps }) {

  const [state , dispatch] = useReducer(reducer, initialState)


  const value = {
    ...state,
    login : (user) => {
      dispatch({type : actions.LOGIN , payload : user })
    },
    setErrors : (errors) => {
      dispatch({type : actions.SET_ERRORS , payload : errors})
    },
    logout : () => {
      dispatch({type : actions.LOGOUT})
      Router.push('/')
    },

  }
  
  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
