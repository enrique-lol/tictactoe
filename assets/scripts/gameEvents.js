'use strict'
const ui = require('./ui')
const gameApi = require('./gameApi')

///////////////////////////////////////////////////////////////
const newGameEvent = function(event) {
  event.preventDefault()
  gameApi.newGameRequest()
  .then(ui.onGameButtonSuccess)
}
/////////////////////////////////////////////////////////////////
let turnCount = 2
/////////////////////////////////////////////////////////////////
const clickEvent = function(event) {
  //below: this assigns the index to what to give the api
const apiIndexFood = $(this).data('cell-index')
const selectedSpot = event.target
let value
//below: this determines whose turn it is
if (turnCount % 2 === 0){
  value = 'x'
} else {
  value = 'o'
}
// check if space is empty
// If it is empty, add player to board,
//


if ($(selectedSpot).text === '' ){
$(selectedSpot).text(value)
gameApi.spotRequest(apiIndexFood, value)
.then(ui.onPlacementSuccess)
} else if ($(selectedSpot).text === '1')  {
  console.log('option 2')
  ui.onPlacementFailure()
} else {
  console.log('option 3 -- nothing worked')
}
}
//////////////////////////////////////////////////////////





module.exports = {
  newGameEvent,
  clickEvent
}
