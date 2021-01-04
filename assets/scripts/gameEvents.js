'use strict'
const ui = require('./ui')
const gameApi = require('./gameApi')
let turnCount = 2


///////////////////////////////////////////////////////////////
const newGameEvent = function(event) {
  // console.log('this happens')
  turnCount = 2
  event.preventDefault()
  gameApi.newGameRequest()
  .then(ui.onGameButtonSuccess)

}
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
const clickEvent = function(event) {

  let value
  //below: this determines whose turn it is
  if (turnCount % 2 === 0){
    value = 'x'
    $('#message').text("It is O's turn now")
  } else {
    value = 'o'
    $('#message').text("It is X's turn now")

  }

  //below: this assigns the index to what to give the api
const selectedSpot = event.target
const apiIndexFood = $(selectedSpot).data('cell-index')


// gamelogic: If empty, do this

if ($(selectedSpot).text() === 'x') {
  // console.log('space taken, bucko')
  $('#message').text("This space is taken")
}
else if ($(selectedSpot).text() === 'o') {
  $('#message').text("This space is taken")
  // console.log('space taken, bucko')
}
else {
  turnCount++
  $(selectedSpot).text(value)
  gameApi.spotRequest(apiIndexFood, value, false)
  .then(ui.onPlacementSuccess)

}

}







// if (spotSelected === empty){
// turnCount++
//
//
// }
// else {
//   console.log('option 2')
//   ui.onPlacementFailure()
// }

//////////////////////////////////////////////////////////





module.exports = {
  newGameEvent,
  clickEvent
}
