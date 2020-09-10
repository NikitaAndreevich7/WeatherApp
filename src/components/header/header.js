import React,{Component} from 'react';
import ChangeCity from '../changeCity'
import { Link, withRouter } from 'react-router-dom';

import './header.css'

class Header extends Component{


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
                <div className='exit-box btn'  onClick={() => this.props.history.push("/")}>
                    <img className='icon-exit' src={require('../../UI/img/exit.png')} alt='' />
                </div>
            </div>
        )
    }
}


export default withRouter(Header)