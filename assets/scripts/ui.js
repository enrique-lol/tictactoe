'use strict'


////////////////////////////////////////////////////////
const signUpPoggers = function(){
  $('form').trigger('reset')
  $('#targethtml').html('<h1>Welcome to Tic-Tac-Toe!</h1>')
}
//////////////////
const signUpBruhMoment = function(){
  $('#targethtml').html('<h1>Bruh Moment: Sign-Up Error</h1>')
}
////////////////////////////////////////////////////////
const signInPoggers = function() {
  $('form').trigger('reset')
  $('#targethtml').html('<h1>Welcome Back to Tic-Tac-Toe!</h1>')
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
}
/////////////////////
const logOutBruh = function() {
  $('targethtml').html('<h1>Bruh Moment: Logout Error</h1>')
}
//////////////////////////////////////////////////////////



module.exports = {
  signUpPoggers ,
  signUpBruhMoment ,
  signInPoggers ,
  signInBruhMoment ,
  passwordPog ,
  passwordBruh ,
  logOutPog ,
  logOutBruh
}
