import React, { Component } from "react";
import CounterCtrl from "./counter";

class CountCtrl extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let cnt = this.state.count
        this.setState({
            count: ++cnt
        })
    }
    render(){
        return(
            <>
            <h1>count</h1>
            <CounterCtrl count={this.state.count} handleClick={this.handleClick} />
            </>
        )
    }
}

export default CountCtrl;