import React,{Component} from 'react';
import {NavList4,Logo,Dson} from './../HomeStyle';
import {connect} from 'react-redux'
class  Nav4 extends Component{
    state={
demo5:[]
    };
    render(){
        return(
            <div>
                <NavList4>
                    <img src="//asset.ibanquan.com/s/30611/727/index_global1_pic_3?v=1568268246_1572510848'" alt=""/>
                    <img src="//asset.ibanquan.com/s/30611/727/index_global1_pic_1?v=1568268246_1572510848'" alt=""/>
                    {
                        this.props.demo5.map((item,index)=>{
                            return(
                                <Dson key={index}>
                                    <li>{item.title}</li>
                                </Dson>
                            )
                        })
                    }
                </NavList4>
            </div>
        )
    }
}
const mapState = (state) => ({
    demo5:state.home.demo5
});
export default connect(mapState,null) (Nav4)