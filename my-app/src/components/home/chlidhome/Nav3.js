import React,{Component} from 'react';
import {NavList3,Three} from './../HomeStyle';
import {connect} from 'react-redux'
class  Nav3 extends Component{
    state={
demo3:[]
    };
    render(){
        return(
            <div>
                <NavList3>
                    {
                        this.props.demo3.map((item, index) => {
                            return (
                                <Three key={index}>
                                    <img src={item.topicUrl} />
                                    <div>
                                        <span>{item.title}</span>
                                    </div>
                                </Three>
                            )
                        })
                    }
                </NavList3>
            </div>
        )
    }
}
const mapState = (state) => ({
    demo3:state.home.demo3
});
export default connect(mapState,null) (Nav3)