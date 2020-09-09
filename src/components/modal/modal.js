import React,{Component} from 'react'

export default class Modal extends Component{

    state = {
        top: '20px'
    }

    componentDidMount() {
        this.timeout = setTimeout(this.statusChange, 500);
      }

      componentWillUnmount() {
        clearTimeout(this.timeout);
      }
    
      statusChange = () => this.setState({ top: '-20px' });
    
      render(){
          
        return (
            <div style={{position:'absolute',top:this.state.top}}>
                <div class="alert alert-primary" role="alert">
                    This is a primary alert—check it out!
                </div>
            </div>
        )
      }


}

