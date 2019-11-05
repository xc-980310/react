import React,{Component} from 'react';
import {NavList2,Two} from './../HomeStyle';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
class  Nav2 extends Component{
            state = {
            demo2:[],

    };

    render(){

        return(
            <div>
               <NavList2>
                   {
                       this.props.demo2.map((item, index) => {
                           return (
                               <Two key={index}>
                                   <img src={item.imgUrl} />
                                   <div>
                                       <Link to={`/sin/${item.id}`}>
                                       <span>{item.txt}</span>
                                       </Link>
                                       <p>{item.desc}</p>
                                   </div>
                               </Two>
                           )
                       })
                   }
               </NavList2>
            </div>
        )
    }
}
const mapState = (state) => ({
    demo2:state.home.demo2
});
export default connect(mapState,null) (Nav2)