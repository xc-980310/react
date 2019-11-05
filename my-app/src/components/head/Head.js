import React,{Component} from 'react';
import {HeadWrap,Logo,Nav,NavItem,Inp,Search,SearchInfo} from './headStyle';
import{connect} from 'react-redux'
import * as headActionCreaters from './store/headActionCreaters'
function showInfo(flag) {
    if(flag){
        return(
            <SearchInfo>
                <span>手机专场</span>
                <span>笔记本</span>
                <span>液晶电视</span>
            </SearchInfo>
        )
    }else{
        return null
    }
}
class  Head extends Component{
    render(){
        return(
            <div>
                <HeadWrap>
                    <Logo/>
                    <Nav>
                       <NavItem href={"/"}>首页</NavItem>
                        <NavItem href={"/list"}>详情页</NavItem>

                    </Nav>
                    <Search>
                    <Inp className={this.props.flag?'flag':''}
                         onFocus={this.props.inputFocus}
                         onBlur={this.props.inputBlur}/>
                        <span className="glyphicon glyphicon-search"/>
                    </Search>
                    {showInfo(this.props.flag)}
                </HeadWrap>
            </div>
        )
    }
}

const mapState = (state) => ({
    flag: state.head.flag
        });

const mapDispatch = (dispatch) => ({
    inputFocus() {
        dispatch(headActionCreaters.handleFocus())
    },
    inputBlur() {
        dispatch(headActionCreaters.handleBlur())
    }

});
export default connect(mapState,mapDispatch) (Head)