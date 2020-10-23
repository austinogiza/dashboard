import React, { Component } from 'react'

import Card from '../components/Card';
import Title from './Title';
import Account from '../components/Account';
import Welcome from './Welcome';

export default class Overview extends Component {
    render() {
        return (
           <div className="overview">

               <div className="container">
                 
                   <Welcome/>
                   <Title/>

                   <Card />
                   <Account/>


               </div>
           </div>
        )
    }
}
