import React,{Component} from "react";
export class TestCom extends Component{
    componentWillUnmount(){
        console.log("Triggered")
    }
    render(){
        return <div> <div class="unmount">Remove items</div></div>
    }
}
export default TestCom
