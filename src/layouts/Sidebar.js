import React, { Component } from 'react'
import List from '../components/List';

import home from '../images/home.svg'
import users from '../images/users.svg'
import bell from '../images/bell.svg'
import log_out from '../images/log-out.svg'
import dot from '../images/dot.svg'


class Sidebar extends Component {
    render() {
        return (
           <div className="Sidebar">

               <div className="container">

<List icon={home}/>
<List icon={users}/>
<List icon={bell}/>
<List icon={log_out}/>
<List icon={dot}/>



               </div>
           </div>
        )
    }
}


export default Sidebar;
