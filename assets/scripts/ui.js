'use strict'

const store = require('./store.js')
const turnlogic = require('./turnlogic')


////////////////////////////////////////////////////////
const signUpPoggers = function(response){
  $('form').trigger('reset')
  store.user = response.user
  $('#targethtml').html('<p>Account Created! Log in.</p>')
  $('.b1').show()
  $('.a1').show()
  $('.3a').hide()
}
//////////////////
const signUpBruhMoment = function(){
  $('#targethtml').html('<h1>Bruh Moment: Sign-Up Error</h1>')
}
////////////////////////////////////////////////////////
const signInPoggers = function(response) {
  $('form').trigger('reset')
  store.user = response.user
  $('#targethtml').html('<h1>Welcome Back to Tic-Tac-Toe!</h1>')
  $('.sign-up-parent').hide()
  $('.sign-in-parent').hide()
  $('.b1').hide()
  $('.a1').hide()
  $('.3a').show()
  }
////////////////////
const signInBruhMoment = function(){
  $('#targethtml').html('<h1>Bruh Moment: Sign-In Error</h1>')
}
//////////////////////////////////////////////////////
const passwordPog = function(){
  $('#targethtml').html('<h1>Remember your new password!!1!</h1>')
  $('form').trigger('reset')

}
////////////////////
const passwordBruh = function(){
  $('targethtml').html('<h1>Bruh Moment: Password Error</h1>')
}
///////////////////////////////////////////////////////
const logOutPog = function() {
  $('#targethtml').html('<h1>plz come back im lonely</h1>')
  $('.b1').show()
  $('.a1').show()
  $('.3a').hide()
  $('.4a').hide()
  $('.sign-up-parent').show()
  $('.sign-in-parent').show()
}
/////////////////////
const logOutBruh = function() {
  $('targethtml').html('<h1>Bruh Moment: Logout Error</h1>')
}
//////////////////////////////////////////////////////////
const onGameButtonSuccess = function(response) {
  store.game = response.game
  $('.4a').show()
  $('#targethtml').html('')
}
/////////////////////////////////////////////////////////
const onPlacementSuccess = function(value) {
const targetSpot = event.target
$(targetSpot).text(value)

turnlogic.turnCount++

console.log(targetSpot.text)
console.log(turnlogic.turnCount)

}
///////////////////////////////////////////////////////////
const onPlacementFailure = function() {
  console.log('Thou shall not pass')
}


module.exports = {
  signUpPoggers ,
  signUpBruhMoment ,
  signInPoggers ,
  signInBruhMoment ,
  passwordPog ,
  passwordBruh ,
  logOutPog ,
  logOutBruh ,
  onGameButtonSuccess ,
  onPlacementSuccess ,
  onPlacementFailure
}
