const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=26bab8d797bab5c3f77ea0c1f3170cda&query=' + latitude + ',' + longitude 
    request({ url,json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services forecast', undefined)
        } else if (body.error) {
            callback('Unable to find the location find another search forecast', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast