'use strict'

const store = require('./store.js')
const config = require('./config.js')


const newGameRequest = function() {
  //console.log('Hooray!')
const data = store.user.token
// console.log(data)
return $.ajax({
  url: config.apiUrl + '/games',
  method: 'POST' ,
  headers: {
    Authorization: 'Bearer ' + store.user.token
  }
})
}
const spotRequest = function(eventLiteral , value) {
  return $.ajax({
    url: config.apiUrl + '/games/' + eventLiteral,
    method: 'PATCH' ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })

}







module.exports = {
  newGameRequest ,
  spotRequest
}
