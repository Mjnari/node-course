const request = require('request')

const url = 'https://api.darksky.net/forecast/7eb19d591b85995100e4fefb28997a6a/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }    
// })

const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoibWoxIiwiYSI6ImNqdTNmNmtoejBqNWo0ZG82NHN6dHYwNTQifQ.kS6IuwFw0A4shHV2_rrVMg&limit=1'

request({ url: urlMapBox, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geolocation services.')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(longitude, latitude)
    }
})