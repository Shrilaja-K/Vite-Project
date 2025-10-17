import React,{Component} from "react";
import TestCom from "./TestCom";


export class UnMounting extends Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }

    deleteHandle=()=>{
        this.setState({
            show:false
        })
    }
    render(){
        let showcomponent;
        if(this.state.show){
            showcomponent=<TestCom />
        }

        return(
            <div>
                <h3>Unmounting</h3>
                <div className="unmount">
                    {showcomponent}
                    <button onClick={this.deleteHandle}>Delete items</button>
                </div>
            </div>
        )
    }
}
export default UnMounting
