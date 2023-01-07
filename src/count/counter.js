import React, { Component } from "react";

class CounterCtrl extends Component{
    render(){
        return(
            <>
                <h2>
                    {this.props.count}
                </h2>
                <button onClick={this.props.handleClick}>add</button>
            </>
        )
    }
}

export default CounterCtrl;