'use strict'
const ui = require('./ui')
const gameApi = require('./gameApi')
const turnlogic = require('./turnlogic.js')

const newGameEvent = function(event) {
  event.preventDefault()
  gameApi.newGameRequest()
  ui.onGameButtonSuccess()
}
/////////////////////////////////////////////////////////////////
const clickEvent = function(event) {
// console.log('is this thing on?')
const eventLiteral = event.target
let value
if (turnlogic.turnCount % 2 === 0){
  value = 'x'
} else {
  value ='o'
}
// console.log(turnlogic.turnCount , value , event.target)
gameApi.spotRequest(eventLiteral, value)
}






module.exports = {
  newGameEvent,
  clickEvent
}
