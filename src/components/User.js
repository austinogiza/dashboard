import React, { Component } from 'react'

export default class User extends Component {
    render() {

        const {img, name} = this.props;
        return (
           <div className="User">

               <img src={img}/>
        <p>{name}</p>
           </div>
        )
    }
}
