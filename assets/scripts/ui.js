'use strict'

const store = require('./store.js')
const gameApi = require('./gameApi')

let gameOver = false

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
  $('#message').text("Remember your new password!!11!!1")

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
  $('.col-4').text('')
  let gameOver = false
  $('#message').text('New Game!')
  $('.single-box').css('pointer-events', 'auto')
}
/////////////////////////////////////////////////////////
const onViewGames = function (gameResponse) {
  const numOfGames = gameResponse.games.length
  $('#message').text(numOfGames + ' games played!!')
}

////////////////////////////////////////////////////////
const onPlacementSuccess = function(response) {
const gameCells = response.game.cells
// console.log(gameCells)



// below: win logic to tell if there is a winner
if (gameCells[0] === "x" && gameCells[1] === "x" && gameCells[2] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[0] === "o" && gameCells[1] === "o" && gameCells[2] === "o" ){
  // console.log('o wins')
  gameOverOWins()

} else if (gameCells[3] === "x" && gameCells[4] === "x" && gameCells[5] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[3] === "o" && gameCells[4] === "o" && gameCells[5] === "o" ){
  // console.log('o wins')
  gameOverOWins()

} else if (gameCells[6] === "x" && gameCells[7] === "x" && gameCells[8] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[6] === "o" && gameCells[7] === "o" && gameCells[8] === "o" ){
  // console.log('o wins')
  gameOverOWins()

} else if (gameCells[0] === "x" && gameCells[3] === "x" && gameCells[6] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[0] === "o" && gameCells[3] === "o" && gameCells[6] === "o" ){
  // console.log('o wins')
  gameOverOWins()

} else if (gameCells[1] === "x" && gameCells[4] === "x" && gameCells[7] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[1] === "o" && gameCells[4] === "o" && gameCells[7] === "o" ){
  // console.log('o wins')
  gameOverOWins()

} else if (gameCells[2] === "x" && gameCells[5] === "x" && gameCells[8] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[2] === "o" && gameCells[5] === "o" && gameCells[8] === "o" ){
  // console.log('o wins')
  gameOverOWins()

} else if (gameCells[0] === "x" && gameCells[4] === "x" && gameCells[8] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[2] === "x" && gameCells[4] === "x" && gameCells[6] === "x" ){
  // console.log('x wins')
  gameOverXWins()

} else if (gameCells[0] === "o" && gameCells[4] === "o" && gameCells[8] === "o" ){
  // console.log('o wins')
  gameOverOWins()

} else if (gameCells[2] === "o" && gameCells[4] === "o" && gameCells[6] === "o" ){
  // console.log('o wins')
  gameOverOWins()

}
const gameDraw = !gameCells.includes('')
      if (gameDraw) {
        // console.log("draw i guess")
        $('#message').text('DRAW! Play again')
        // $('.box').on('click', function () {
        //   gameOver = true
        // })
        gameOver = true
        $('.single-box').css('pointer-events', 'none')
        gameApi.spotRequest(0, "null", true)
      }
    }

///////////////////////////////////////////////////////////
const onPlacementFailure = function() {
  // console.log('Thou shall not pass')
}
/////////////////////////////////////////////////////////

const gameOverXWins = function(){
  // This function should do 2 things:
  // It should stop the player from adding spaces (harder)
  // and it should display a message that X won (easier)
  gameOver = true
  $('#message').text('X WINS!')
  $('.single-box').css('pointer-events', 'none')
  gameApi.spotRequest(0, "null", true)

}
/////////////////////////////////////////////////////////

const gameOverOWins = function(){
  // This function should do 2 things:
  // It should stop the player from adding spaces (harder)
  // and it should display a message that O won (easier)
  gameOver = true
  $('#message').text('O WINS!')
  $('.single-box').css('pointer-events', 'none')
  gameApi.spotRequest(0, "null", true)
  //$().off
}
/////////////////////////////////////////////////////////



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
  onPlacementFailure,
  gameOverXWins,
  gameOverOWins,
  onViewGames
}
