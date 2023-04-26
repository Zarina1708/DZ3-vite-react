import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const initialState = {
  user: {
    name: ' ',
    age: 0,
    gender: ' ',
  }
}



const userReducer = (state= initialState, action) => {

  if(action.type === 'USER_SUBMIT'){
    return {...state,
      user: {
        ...state.user,
        [action.payload.key]: action.payload.value
      }}
  }

  return state
}

const store = createStore(userReducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
