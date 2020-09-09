import React, { Component } from 'react';

import HomePageHoc from '../../hoc'
import WeatherNow from '../../weatherNow'
import OtherDays from '../../otherDays'
import Header from '../../header'

import './home-page.css'

class HomePage extends Component {

    render() {

        return (
            <div className='container'>
                <Header {...this.props.data.city} />
                <WeatherNow {...this.props.data} />
                <OtherDays {...this.props.data} />
            </div>
        )
    }
}

export default HomePageHoc(HomePage)

// переводим полученные милисекунды(заката и рассвета) с сервера ,
//в минуты и часы
// const getTime = (time) => {
//     const minutes = parseInt((time / (1000 * 60)) % 60);
//     const hours = parseInt((time / (1000 * 60 * 60)) % 24);
//     const result = `${hours} : ${minutes} `;
//     return result;
// }