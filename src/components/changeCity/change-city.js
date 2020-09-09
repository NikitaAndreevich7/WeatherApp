import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getNewCity} from '../../store/action'

 class ChangeCity extends Component {

    state = {
        value: '',
        city: ''
    }

    onChangeInput = (event) =>{
        this.setState({value: event.target.value})
    }

    onSubmit = () =>{
        this.props.newCity(this.state.value)
    }


    render() {
        return (
            
                <div className="input-group mb-3">
                    <input type="text"
                         className="form-control" 
                         placeholder="Recipient's username"
                         value={this.state.value}
                         onChange={(event) => this.onChangeInput(event)} />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-info" onClick={() => this.onSubmit()} >Button</button>
                    </div>
                </div>
            

        )
    }
}

const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch) =>{
    return{
        newCity:(city) => dispatch(getNewCity(city))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeCity)