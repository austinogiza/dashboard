import React, { Component } from 'react'
import settings from '../images/settings.svg'

class Settings extends Component {
    render() {
        return (
           <div className="Settings">
               <div className="container">
                   <img src={settings} alt=""/>
               </div>
           </div>
        )
    }
}


export default Settings;