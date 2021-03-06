import store from '../state/store/configureStore'
import axios from 'axios'

const LOCAL_STORAGE_KEY = 'J-tockAuth-Storage'

const signUp = async (event) => {
  try {
    event.preventDefault()
    let response = await axios.post('/auth', {
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    })
    const credentials = {
      'access-token': response.headers['access-token'],
      client: response.headers.client,
      uid: response.headers.uid,
      ...response.data.data,
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(credentials))
    store.dispatch({
      type: 'SET_CURRENT_USER',
      payload: credentials,
    })
    store.dispatch({ type: 'REGISTRATION_FORM', payload: { openModal: true } })
    alert('Welcome!')
  } catch (error) {
    store.dispatch({
      type: 'REGISTER_ERROR_MESSAGE',
      payload: error.response.data.error.full_messages[0],
    })
    store.dispatch({ type: 'REGISTRATION_FORM', payload: { openModal: false } })
  }
}

export { signUp, LOCAL_STORAGE_KEY }
