'use strict'

const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

///////////////////////////////////////////////////////////////////////
const signUpEvent = function(event) {
  event.preventDefault()
  // console.log('Hooray!')
    //below: define data
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  //below: send data to api js file (and api as param of course)
  api.signUpRequest(data)
  .then(ui.signUpPoggers)
  .catch(ui.signUpBruhMoment)
}
//////////////////////////////////////////////////////////////////////
const signInEvent = function(event) {
  event.preventDefault()
  // console.log('Hello world')
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  api.signInRequest(data)
  .then(ui.signInPoggers)
  .catch(ui.signInBruhMoment)
}
//////////////////////////////////////////////////////////////////////
const changePasswordEvent = function(event) {
  event.preventDefault()
  // console.log('hooray')
  const data = getFormFields(event.target)
  // console.log(data)
  api.changePasswordRequest(data)
  .then(ui.passwordPog)
  .catch(ui.passwordBruh)
}
////////////////////////////////////////////////////////////////
const logoutEvent = (event) => {
  //$('#targethtml').html('<h1>Victory Royale!</h1>')
  api.logOutRequest()
  .then(ui.logOutPog)
  .catch(ui.logOutBruh)
}


module.exports = {
  signUpEvent ,
  signInEvent ,
  changePasswordEvent ,
  logoutEvent
}
