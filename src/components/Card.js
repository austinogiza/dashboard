import React, { Component } from 'react'
import Cards from './Cards';
import users from '../images/user.svg'
import eye from '../images/eye.svg'
import up from '../images/arrow-up.svg'
import down from '../images/arrow-down.svg'
import finger from '../images/finger.svg'

 class Card extends Component {
    render() {
        return (
          <div className="Card">
<div className="container">
<Cards  icon={users} title="1,060,000" description="Account Balance"/>
<Cards  icon={finger} title="600,000" description="Credit" monitor={up }/>
<Cards  icon={eye} title="404,000" description="Debit" monitor={down}/>

</div>
        
          </div>
        )
    }
}


export default Card;