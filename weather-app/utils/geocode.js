const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWoxIiwiYSI6ImNqdTNmNmtoejBqNWo0ZG82NHN6dHYwNTQifQ.kS6IuwFw0A4shHV2_rrVMg&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to locaiton service.', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find locaiton. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode