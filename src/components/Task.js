import React, { Component } from 'react'

export default class Task extends Component {
    render() {

        const {amount,time,payment,method,style} = this.props;
        return (
           <div className="Task_list">

        <div className="time">{time}</div>
        <div className="event {style}"  >{payment}</div>
        <div className="method">{method}</div>
        <div className={style}>	&#8358; {amount}</div>
           </div>
        )
    }
}
