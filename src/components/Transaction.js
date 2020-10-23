import React, { Component } from 'react'
import Task from './Task';

class Transaction extends Component {
    render() {
        return (
           <div className="Transaction">
               <div className="container">
<div className="title">
    <h1>Latest Transactions</h1>
</div>

<div className="task">

<Task time="3.04pm" payment="Starbucks" method="Card Payment"  style="amount debit" amount="3,000"/>
<Task time="2.55pm" payment="Deborah" method="Bank Transfer" category="Food" style="amount debit" amount="7,000"/>
<Task time="2.42pm" payment="Google Drive" method="Card Payment" category="Food" style="amount debit" amount="5,000"/>
<Task time="1.04pm" payment="Job Payment" method="Bank Transfer" category="Transfer" style="amount credit" amount="30,000"/>
</div>


               </div>
           </div>
        )
    }
}


export default Transaction;
