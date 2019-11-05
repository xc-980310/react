import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './HomeStyle';
import Nav1 from './chlidhome/Nav1'
import Nav2 from './chlidhome/Nav2'
import Nav3 from './chlidhome/Nav3'
import Nav4 from './chlidhome/Nav4'


import axios from 'axios'
import {connect} from 'react-redux'
class  Home extends Component{

    render(){
        return(
            <div>
                <HomeWrap>
                    <HomeLeft>
                        <img src="//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848" alt=""/>
                        <Nav1/>
                        <Nav2/>
                    </HomeLeft>
                    <HomeRight>
                         <Nav3/>
                        <Nav4/>
                    </HomeRight>
                </HomeWrap>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                const data =res.data.data;
                const action={
                    type:'init_home_data',
                    data
                };
                this.props.changeHomeData(action)
            })
    }

}
const mapDispatch=(dispatch)=>({
   changeHomeData(action){
       dispatch(action)
   }
});
export default connect(null,mapDispatch)(Home)