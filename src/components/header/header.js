import React,{Component} from 'react';

import ChangeCity from '../changeCity'

import './header.css'

export default class Header extends Component{


    render(){

        const {name,country} = this.props;

        return(
            <div className='header-box'>
                <div className='text-box'>
                    <p className='header-text'>{`${name},${country}`}</p>
                </div>
                <div className='changeCity-box'>
                    <ChangeCity />
                </div>
            </div>
        )
    }
}