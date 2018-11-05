import React from 'react'
export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    componentWillMount(){
       console.log("will mount")
    }
    componentDidMount(){
        console.log("did mount")
    }
    componentWillReciveProps(newProps){
        console.log("WillReciveProps"+newProps.name)
    }
    shouldeComponentUpdate(){
        console.log("shouldeComponentUpdate")
        return true;
    }
   componentWillUpdate(){
        console.log("componentWillUpdate")
   }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        return <div>
            <p>this is child text child</p>
            <p>{this.props.name}</p>
        </div>
    }
}