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

    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            this.createAllData(this.props.list)
        }
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
        return arr[day].map((weatherData,index) => {

            const { dt_txt, weather, main:{temp} } = weatherData;
 
    
            // I make the temperature format in Celsius
            const temperature = Math.floor(parseInt(temp - 273.15))
            const time = dt_txt.slice(11, 16)

            const url = this.searchUrl(weather[0].main)

            return (
                <div key={index.toString()}className='descriptoins-weather'>
                    <p className='time'>{time}</p>
                    <img className='img' src={url} alt='' />
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

            const classButtonDay =  this.state.day !== index ? 'days btn btn-info' : 'days btn btn-info active' 

            return (
                <div key={index.toString()} className={classButtonDay} onClick={() => this.onChangeDay(index)} >
                    <p className='days-text'>{index === 0 ? 'Today': day}</p>
                </div>
            )
        })
    }

    onChangeDay = (day) =>{
        this.setState({day:day});

        this.createDataDay(this.state.allDays,day)
    }

    searchUrl = (type) =>{

        if(type === 'Clouds'){ return require('../../UI/weather-icon/cloud.png')}
        else if(type === 'Clear'){ return require ('../../UI/weather-icon/sun.png')}
        else if(type === 'Rain'){ return require ('../../UI/weather-icon/rainy.png')}
        else if(type === 'Show'){  return require ('../../UI/weather-icon/snowy.png')}
        else{return require('../../UI/weather-icon/climate.png')}
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

