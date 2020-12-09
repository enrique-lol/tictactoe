'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./userEvents.js')


/////////////////////////////////////////////////////////////////
$(() => {
  $('#sign-up').on('submit', userEvents.signUpEvent)
  $('#sign-in').on('submit', userEvents.signInEvent)
  $('#change-password').on('submit', userEvents.changePasswordEvent)
  $('#logout').on('click', userEvents.logoutEvent)

  // your JS code goes here
})
