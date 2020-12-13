'use strict'
const ui = require('./ui')
const gameApi = require('./gameApi')
const turnlogic = require('./turnlogic.js')


///////////////////////////////////////////////////////////////
const newGameEvent = function(event) {
  event.preventDefault()
  gameApi.newGameRequest()
  .then(ui.onGameButtonSuccess)
}
/////////////////////////////////////////////////////////////////
const clickEvent = function(event) {
// console.log('is this thing on?')
const apiIndexFood = $(this).data('cell-index')
const selectedSpot = event.target
let value
if (turnlogic.turnCount % 2 === 0){
  value = 'x'
} else {
  value = 'o'
}
// console.log(turnlogic.turnCount , value , selectedSpot.text)
if (selectedSpot.text === undefined) {
gameApi.spotRequest(apiIndexFood, value)
.then(ui.onPlacementSuccess(value))
} else if (selectedSpot.text === ('x' || 'o'))  {
  ui.onPlacementFailure()
}
}
//////////////////////////////////////////////////////////





module.exports = {
  newGameEvent,
  clickEvent
}
