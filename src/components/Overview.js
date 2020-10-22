import React, { Component } from 'react'

import Card from '../components/Card';
import Title from './Title';
import Account from '../components/Account';

export default class Overview extends Component {
    render() {
        return (
           <div className="overview">

               <div className="container">
                   <Title/>

                   <Card />
                   <Account/>


               </div>
           </div>
        )
    }
}
