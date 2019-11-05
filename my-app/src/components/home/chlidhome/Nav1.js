import React,{Component} from 'react';
import {NavList1,One} from './../HomeStyle';
import {connect} from 'react-redux'

class  Nav1 extends Component{
    state={
    demo:[]
    };
    render(){
        return(
            <div>
                <NavList1 >

                    {
                        this.props.demo.map((item,index)=>{
                            return(
                        <One key={index}>
                        <img src={item.topicUrl}alt=""/>
                        <span>{item.txt}</span>
                        </One>
                            )
                        })

                    }
                </NavList1>
            </div>
        )
    }
}
    const mapState = (state) =>( {
    demo:state.home.demo
    });

export default connect (mapState,null)( Nav1)