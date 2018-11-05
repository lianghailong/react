import React from 'react'
import Child from './child'
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    //箭头函数的应用es6语法中特有的。
    handeAdd=()=>{
        this.setState({
        count:this.state.count+1
                      })
      }
      //this的指代不一样。
      handeClick(){
          this.setState({
              count:this.state.count+1
          })
      }
    render(){
        return<div>
            <p>React生命周期</p>
            <button onClick={this.handeAdd}>点击</button>
            <button onClick={this.handeClick.bind(this)}>点击</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}/>
        </div>
    }
}