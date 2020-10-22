import React, { Component } from 'react'
import User from './User';
import profile from '../images/profile.svg'
import dami from '../images/dami.svg'
import john from '../images/john.svg'
import diana from '../images/diana.svg'

class Users extends Component {
    render() {
        return (
          <div className="Users_section">
              <div className="container">
                  <h1>Account holders</h1>

                  
                  <User img={profile} name="Daniel"/>
                  <User img={dami} name="Daniella Rose"/>
                  <User img={diana} name="Princess Diana"/>
                  <User img={john} name="John Osamu"/>


              </div>
          </div>
        )
    }
}

export default Users;
