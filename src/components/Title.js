import React, { Component } from 'react'
 class Title extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             select:''
        }
    }
    

    onChange = e=> this.setState({
        select:e.target.value
    })
    render() {

        const {select} = this.state
        return (
          <div className="Title">

              <h1>Account Overview</h1>

              <form>

                  <select name="select" id="" value={this.select} onChange={this.onChange}>Last 30 days

                      <option selected>Last 30 days</option>
                  </select>
              </form>
          </div>
        )
    }
}



export default Title;