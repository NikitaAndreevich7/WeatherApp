import React, { Component } from 'react';

import DataWeather from '../../services/weather-service';
import Spinner from '../spinner'



const HomePageHoc = (ViewsComponent) => {
    return class extends Component {

        dataWeather = new DataWeather();

        state = {
            data: null,
            modalStatus: false
        }

        componentDidMount() {
            this.getDataCity();
        }
        componentDidUpdate(prevProps) {
            if (prevProps !== this.props) {
                this.getDataCity();
            }
        }

        //получаем данные про конкретный город
        getDataCity = () => {
            const { city } = this.props;
            console.log(city)
            this.dataWeather
                .getResource(city)
                .then((data) => {

                    if (data.cod === '200') {
                        this.setState({
                            data
                        })
                    } else {
                        alert('Не удается найти указанный город.\nПопробуйте еще ')
                    }
                })
        }

     


        render() {
            const { data } = this.state;


            if (data == null) return <Spinner />

            return <ViewsComponent {...this.props} {...this.state} />;
        }
    }
}

export default HomePageHoc;