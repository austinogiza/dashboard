import React, { Component } from 'react'

import Header from '../components/Header';
import Overview from '../components/Overview';


class Body extends Component {

    render() {
        return (
         <div className="Body">

<Header/>

<Overview/>


         </div>
        )
    }
}


export default Body;
