import React, {Component} from 'react'
import CosmonautCardBack from './CosmonautCardBack'


export default class CosmonautCard extends Component {

    state ={
        showInfo: false
    }

    handleClick = () =>{
        this.setState({showInfo: !this.state.showInfo})
    }
    

    render(){
    return (
        <div class="flip-card">
        <div class="flip-card-inner">
        <div class='cosmoCardFront'>
            <img onClick = {this.handleClick} src= {this.props.cosmonaut.picture} /> 
        </div>
        <div class='cosmoCardBackContainer'>
           <CosmonautCardBack key={this.props.cosmonaut.id} cosmonaut={this.props.cosmonaut}/>
        </div>
         </div>
         </div>
    
    )
    }
}
