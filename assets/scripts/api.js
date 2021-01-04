'use strict'

const config = require('./config.js')
const store = require('./store.js')

///////////////////////////////////////////////////////////////
const signUpRequest = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST' ,
    data
  })
}
//////////////////////////////////////////////////////////////
const signInRequest = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in' ,
    method: 'POST' ,
    data
  })
}
///////////////////////////////////////////////////////////////
const changePasswordRequest = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH' ,
    data ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
////////////////////////////////////////////////////////////
const logOutRequest = function() {
  return $.ajax({
    url: config.apiUrl + '/sign-out' ,
    method: 'DELETE' ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
////////////////////////////////////////////////////////////
const viewgames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

///////////////////////////////////////////////////////////


module.exports = {
  signUpRequest ,
  signInRequest ,
  changePasswordRequest ,
  logOutRequest,
  viewgames
}
