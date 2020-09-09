import React, { Component } from 'react'

import './weather-now.css'

export default class WeatherNow extends Component {

    render() {

        //getting data for the current day
        const {
            main: { feels_like, humidity, pressure, temp },
            wind: { deg, speed }
        } = this.props.list[0]

        const { main } = this.props.list[0].weather[0]
    
        // I make the temperature format in Celsius
        const temperature = Math.floor(parseInt(temp - 273.15))
        const felsTemperature = Math.floor(parseInt(feels_like - 273.15))

        return (
            <div className='weatherNow-box'>
                <div className='weatherNow-tilte'>
                    <div className='img-box'>
                        <img className='img' src={require('../../UI/weather-icon/climate.png')} alt="" />
                    </div>
                    <div className='title-box'>
                        <span className='temp'>{temperature}</span>
                        <p className='type'>{main}</p>
                    </div>
                </div>
                <div className='weatherNow-description'>
                    <div className='description-box'>
                        <p className='value-description'>{felsTemperature}</p>
                        <span className='title-description'>Fels</span>
                    </div>
                    <div className='description-box'>
                        <p className='value-description'>{humidity}</p>
                        <span className='title-description'>Humidity</span>
                    </div>
                    <div className='description-box'>
                        <p className='value-description'>{pressure}</p>
                        <span className='title-description'>Pressure</span>
                    </div>
                    <div className='description-box'>
                        <p className='value-description'>{speed}</p>
                        <span className='title-description'>Wind</span>
                    </div>

                </div>
            </div>
        )
    }
}