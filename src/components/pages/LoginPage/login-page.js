import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormErrors } from '../../Errors/form-errors'
import axios from 'axios'
import './login-page.css'

class LoginPage extends Component {

    state = {
        email: '',
        password: '',
        active: true,
        formErrors: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    onSubmit = (e, type) => {
        console.log(`ON SUBMIT OPEN   TYPE: ${type} `)
        e.preventDefault();

        const { email, password } = this.state;
        // if (email.length < 5 || password.length < 5) return alert('Минимум 5 символов')

        let data = { email, password }
        let url = type ? 'http://localhost:8000/registration' : 'http://localhost:8000/auth'
        console.log(`URL  -  ${url}`)
        axios.post(url, data).then(({ data }) => {
            if (typeof data == 'string') {
                console.log('ЗАШЛИ В БЛОК ИСКЛЮЧЕНИЯ : ALERT ', data)
                return alert(data)
            } else {
                console.log('ЗАШЛИ В БЛОК ПЕРЕХОДА НА ДРУГУЮ СТРАНИЦУ  :  ', data)
                return this.props.history.push("/home-page/");

            }
        })
    }

    onChangeInput = (e, type) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) })
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({
            formValid: this.state.emailValid &&
                this.state.passwordValid
        });
    }


    render() {

        const { active } = this.state;

        return (
            <Fragment>
                {
                    !active ? (
                        <div className='container-form'>
                            <h1>Sign in</h1>
                            <form className='box-form' onSubmit={(e) => this.onSubmit(e, false)}>
                                <div className="form-group">
                                    <div className='panel panel-default'>
                                        <FormErrors formErrors={this.state.formErrors} />
                                    </div>
                                    <label >Email address</label>
                                    <input
                                        name='email'
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter email"
                                        onChange={(event) => this.onChangeInput(event)} />

                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input
                                        name='password'
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(event) => this.onChangeInput(event)}
                                    />

                                </div>

                                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign in</button>
                                <button type="button" className="btn-signUp btn btn-link" onClick={() => this.setState({ active: !this.state.active })}>Sign up</button>


                            </form>
                        </div>
                    ) : (
                            <div className='container-form'>
                                <h1>Sign up</h1>
                                <form className='box-form' onSubmit={(e) => this.onSubmit(e, true)}>
                                    <div className="form-group">
                                        <div className='panel panel-default'>
                                            <FormErrors formErrors={this.state.formErrors} />
                                        </div>
                                        <label >Email address</label>
                                        <input
                                            name='email'
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            placeholder="Enter email"
                                            onChange={(event) => this.onChangeInput(event)} />

                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input
                                            name='password'
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            onChange={(event) => this.onChangeInput(event)}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} > Sign up</button>
                                    <button type="button" className="btn-signUp btn btn-link" onClick={() => this.setState({ active: !this.state.active })}>Sign in</button>


                                </form>
                            </div>
                        )
                }
            </Fragment>
        )
    }
}

export default withRouter(LoginPage)