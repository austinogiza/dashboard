import React, { Component } from 'react'

class Welcome extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             card: 'Hide Card'
        }
    }

    onClick = e =>this.setState({
        card: 'Show Card'
    })
    
    render() {
        return (
          <div className="Welcome">

              <div className="container">
              
                    <div className="name">
                        <h1><span>Hello,</span> Augustine</h1>
                    </div>


              </div>
          </div>
        )
    }
}

export default Welcome;
