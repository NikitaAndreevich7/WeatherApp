import React, { Component } from 'react'

export default class ChangeCity extends Component {

    state = {
        value: '',
        city: ''
    }


    render() {
        return (
            
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-info" >Button</button>
                    </div>
                </div>
            

        )
    }
}