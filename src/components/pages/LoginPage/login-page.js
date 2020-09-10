import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './login-page.css'

export default class LoginPage extends Component {

    state = {
        email: '',
        password:'',
        active: true,
    }

    onSubmit = (e,type) => {
        e.preventDefault();

        const {email,password} = this.state;
        if(email.length < 5 || password.length < 5) return alert('Минимум 5 символов')

        let data = { email,password }
        let url = type ? 'http://localhost:8000/registration' : 'http://localhost:8000/auth'

        axios.post(url, data).then(({data}) =>{
            if(typeof data == 'string'){
                alert(data)
            }else{
                //  this.props.history.push("/home-page/");
                window.location.href= "http://localhost:3000/home-page/"
            }
        })
    }

    onChangeInput = (e,type) =>{
        this.setState({[type]: e.target.value})
    }


    render() {

        const {active} = this.state;

        return (
            <Fragment>
                {
                    !active ? (
                        <div className='container-form'>
                        <h1>Sign in</h1>
                        <form className='box-form' action="/home-page/" onSubmit={(e) => this.onSubmit(e,false)}>
                            <div className="form-group">
                                <label >Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="Enter email" 
                                onChange={(event) => this.onChangeInput(event,'email')} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password"
                                    onChange={(event) => this.onChangeInput(event,'password')} 
        
                                    />
                            </div>
                        
                            <button type="submit" className="btn btn-primary" >Sign in</button>
                            <button type="button" className="btn-signUp btn btn-link" onClick={() => this.setState({active: !this.state.active})}>Sign up</button>
                
        
                        </form>
                    </div>
                    ) : (
                        <div className='container-form'>
                        <h1>Sign up</h1>
                        <form className='box-form' onSubmit={(e) => this.onSubmit(e,true)}>
                            <div className="form-group">
                                <label >Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="Enter email" 
                                onChange={(event) => this.onChangeInput(event,'email')} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password"
                                    onChange={(event) => this.onChangeInput(event,'password')} 
        
                                    />
                            </div>
                        
                            <button type="submit" className="btn btn-primary" > Sign up</button>
                            <button type="button" className="btn-signUp btn btn-link" onClick={() => this.setState({active: !this.state.active})}>Sign in</button>
                          
        
                        </form>
                    </div>
                    )
                }
            </Fragment>
        )
    }
}