import React, { Component } from 'react'

import Spinner from '../spinner'

import './other-days.css'

export default class OtherDays extends Component {

    state = {
        day: 0,
        allDays: null
    }

    componentDidMount() {
        this.createAllData(this.props.list)
    }


    //Divide the array into 5 parts.Each part is a specific day of the week.
    createAllData = (arr) => {
        const newArr = arr.reduce((acc, el, i) => {
            if (i % 8 === 0) {
                acc.push([]);
            }
            acc[acc.length - 1].push(el);
            return acc;
        }, []);
        this.setState({ allDays: newArr })
    }

    //We get an array of days and the current day.Displaying the weather for the current day.
    createDataDay = (arr, day) => {
        return arr[day].map(weatherData => {

            const { dt_txt, weather, wind, main } = weatherData;
            const { temp } = main;

            // I make the temperature format in Celsius
            const temperature = Math.floor(parseInt(temp - 273.15))

            const time = dt_txt.slice(11, 16)
            console.log('time', time)
            return (
                <div className='descriptoins-weather'>
                    <p className='time'>{time}</p>
                    <img className='img' src={require('../../UI/weather-icon/climate.png')} alt='' />
                    <p className='temp'>{temperature}°</p>
                </div>
            )
        })

    }

    //We get the current day of the week and the next 4
    createButtonWeek = () => {
        const weekData =
            [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ]
        const d = new Date();
        const n = d.getDay();

        const fiveDays = weekData.slice(n, n + 5);

        return fiveDays.map((day,index) => {
            return (
                <div className='days btn btn-info' onClick={() => this.onChangeDay(index)} >
                    <p className='days-text'>{day}</p>
                </div>
            )
        })
    }

    onChangeDay = (day) =>{
        this.setState({day:day});

        this.createDataDay(this.state.allDays,day)
    }

    render() {

        const fiveDays = this.createButtonWeek()

        const { day, allDays } = this.state;

        if (allDays == null) return <Spinner />

        const hourlyWeather = this.createDataDay(allDays, day)

        return (
            <div className='otherDays-box'>
                <div className='days-box'>
                    {fiveDays}
                </div>
                <div className='days-description-box'>
                    {hourlyWeather}
                </div>
            </div>
        )
    }
}



