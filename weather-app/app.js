const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const yargs = require('yargs')

const address = yargs.argv._[0]

geocode(address, (error, data) => {
    if (error){
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        
        console.log(data.location)
        console.log(forecastData)
      })
})