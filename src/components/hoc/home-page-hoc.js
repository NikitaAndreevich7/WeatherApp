import React, { Component } from 'react';

import DataWeather from '../../services/weather-service';
import Spinner from '../spinner'

const HomePageHoc = (ViewsComponent) => {
    return class extends Component {

        dataWeather = new DataWeather();

        state = {
            data: null,
            city: 'Kiev',
        }

        componentDidMount() {
            this.getDataCity();
        }

        //получаем данные про конкретный город
        getDataCity = () => {
            const { city } = this.state;
            this.dataWeather
                .getResource(city)
                .then((data) => {

                    this.setState({
                        data
                    })
                })
        }


        render() {
            const {data} = this.state;

            if(data == null) return <Spinner />

            return <ViewsComponent {...this.props} {...this.state} />;
        }
    }
}

export default HomePageHoc;