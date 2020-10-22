import React, { Component } from 'react'

class List extends Component {
     
    render() {

        const {icon } = this.props;
        return (
           <div className="List">

        <span><img src={icon}/></span>
           </div>
        )
    }
}


export default List;