'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./userEvents.js')
const gameEvents = require('./gameEvents')


/////////////////////////////////////////////////////////////////
$(() => {
  $('.a1').show()
  $('.b1').show()
  $('.3a').hide()
  $('.4a').hide()
  $('.sign-in-init').hide()
  $('#sign-up').on('submit', userEvents.signUpEvent)
  $('#sign-in').on('submit', userEvents.signInEvent)
  $('#change-password').on('submit', userEvents.changePasswordEvent)
  $('#logout').on('click', userEvents.logoutEvent)
  $('#newgame').on('click', gameEvents.newGameEvent)
  $('.single-box').on('click', gameEvents.clickEvent)
  $('.login-button').on('click', function() {
    $('.sign-in-init').show()
    $('.intro-parent').hide()
  })

  // your JS code goes here
})
