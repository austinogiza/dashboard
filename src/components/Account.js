import React, { Component } from 'react'
import Transaction from './Transaction';
import Users from './Users';


class Account extends Component {
    render() {
        return (
           <div className="Account">
               <div className="container">
                <Transaction/>
            <Users/>


               </div>
           </div>
        )
    }
}

export default Account;
