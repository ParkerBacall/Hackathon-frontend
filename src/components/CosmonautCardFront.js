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
        <>
        <div id='cosmoCardFront'>
            <img onClick = {this.handleClick} src= {this.props.cosmonaut.picture} /> 
        </div>
         <div id='cosmoCardback'>
             {this.state.showInfo === true ? <CosmonautCardBack key={this.props.cosmonaut.id} cosmonaut={this.props.cosmonaut}/> : null}
         </div>
       </>
    )
    }
}
