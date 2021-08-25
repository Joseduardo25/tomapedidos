import axios from 'axios'
import * as TYPE from '../types/auth'

const API_URL = process.env.REACT_APP_URL_API
const ENDPOINT_LOGIN = '/login'

export const doLogin = (data) => (dispatch) => {
  axios.post(API_URL + ENDPOINT_LOGIN, {
    username: data.username,
    password: data.password
  })
  .then(function (response) {
    console.log(response);
    dispatch({
      type: TYPE.DO_AUTHENTICATED,
      data: true,
    })
  })
  .catch(function (error) {
    console.log(error);
    dispatch({
      type: TYPE.DO_AUTHENTICATED,
      data: false,
    })
  });
}