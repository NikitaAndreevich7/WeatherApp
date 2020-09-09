import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './login-page.css'

export default class LoginPage extends Component {


    render() {
        return (
            <div className='container-form'>
                <h1>Your weather</h1>
                <form className='box-form'>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"  />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <Link to="/home-page/">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Link>
                    
                </form>
            </div>
        )
    }
}