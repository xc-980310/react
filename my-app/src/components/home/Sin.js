import React,{Component} from 'react';
import axios from "axios";
import Head from './../head/Head'
class  Sin extends Component{

    state={
        message:'',
        id:this.props.match.params.id
    };
    componentDidMount() { //ajax请求

        axios.get('http://jsonplaceholder.typicode.com/posts/'+this.state.id)
            .then((res) => {
                //console.log(res);
                this.setState({
                    message: res.data
                })
            })
    }

    render(){
        return(
            <div>
                <Head/>
                {/*<Sins>*/}
                    <div>{this.state.message.title}</div>
                    <p>{this.state.message.body}</p>
                {/*</Sins>*/}
            </div>
        )
    }

}

export default  Sin