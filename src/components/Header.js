import React, { Component } from 'react'
import Search from './Search';
import Settings from './Settings';


class Header extends Component {
    render() {
        return (
           <div className="Header">


<Search/>
<Settings/>

           </div>
        )
    }
}

export default Header;
