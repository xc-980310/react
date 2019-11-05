// import React,{Component} from 'react';
// import {LoginWrap,User,Btn} from './LoginStyle';
// import axios from 'axios';
// class  Login extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: '', //账号
//             pass: '', // 密码
//         }
//     }
//     axiosPost() {
//         axios.post('/', {
//             user: this.user.value,
//             pass: this.pass.value
//         }).then((res) => {
//            console.log(res)
//         }).catch(() => {
//             alert('提交数据失败');
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <LoginWrap>
//                       <h2>登录信息</h2>
//                     <User>
//                         <label>账号：<input type="text" placeholder={"请输入账号"}ref = {
//                             (ref) => this.user = ref }/></label>
//                         <label>密码：<input type="password" placeholder={"请输入密码"} ref = {
//                             (ref) => this.pass = ref }/></label>
//                     </User>
//                     <Btn>
//                         <button onClick={this.axiosPost.bind(this)}>登录</button>
//                     </Btn>
//                 </LoginWrap>
//
//             </div>
//         )
//     }
// }
//
//
// export default Login
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Inp} from './LoginStyle';
import React,{Component} from 'react';
class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (values.username ==='admin'&&values.password==='123') {

                localStorage.setItem('User',JSON.stringify(values));
                this.props.history.push({pathname:'/'})
            }else{
                alert('密码错误，请重新输入 ', values);
            }
        });
    };
   //  axiosPost() {
   //     axios.post('/', {
   //         user: this.username.value,
   //         pass: this.password.value
   //     }).then((res) => {
   //        console.log(res)
   //     }).catch(() => {
   //         alert('提交数据失败');
   //     })
   // }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Inp>
                <h2>登录信息</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                     登录
                    </Button>

                </Form.Item>
            </Form>
            </Inp>
        );
    }
}

export default Form.create({ name: 'normal_login' })(Login);