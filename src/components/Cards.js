import React, { Component } from 'react'

 class Cards extends Component {
    render() {

        const {icon, title, description,monitor} = this.props;
        return (
           <div className="Cards">
               <div className="icon"><img src={icon} alt=""/></div>

        <h1>&#8358; {title}</h1>
        <p>{description}</p>

        <span className="turn"><img src={monitor} alt=""/></span>
           </div>
        )
    }
}


export default Cards;