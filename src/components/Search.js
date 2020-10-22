import React, { Component } from 'react'
import profile from '../images/profile.svg'

class Search extends Component {


constructor(props) {
    super(props)

    this.state = {
         search:''
    }
}

    onSubmit = e => {
        e.preventDefault();
    }
    onChange = e => this.setState({search :e.target.value});
    
    render() {

        const {search } = this.state
        return (
         <div className="Search">

             <div className="container">

                 <div className="form">

                     <form method="post" onSubmit={this.onSubmit}>

                         <input type="text" value={search} onChange={this.onChange} name="search" placeholder="Search"/>
                     </form>
                 </div>

                 <div className="profile">
                 <img src={profile} alt=""/>
             </div>
             </div>

            
         </div>
        )
    }
}


export default Search;