'use strict'

const store = require('./store.js')
const config = require('./config.js')

///////////////////////////////////////////////////////////////////////
const newGameRequest = function() {
  //console.log('Hooray!')
// console.log(data)
return $.ajax({
  url: config.apiUrl + '/games',
  method: 'POST' ,
  headers: {
    Authorization: 'Bearer ' + store.user.token
  }
})
const data = store.user.token
}
///////////////////////////////////////////////////////////////////////
const spotRequest = function(apiIndexFood , value) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id ,
    method: 'PATCH' ,
    data: {
  "game": {
    "cell": {
      "index": apiIndexFood,
      "value": value
    },
    "over": false
  }
} ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
////////////////////////////////////////////////////////







module.exports = {
  newGameRequest ,
  spotRequest
}
