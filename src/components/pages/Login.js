import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./App.css"
import { Form, Icon, Input, Button, message } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            
            var flag=1;
            Object.values(localStorage).map((loc,i)=>{
                if(JSON.parse(localStorage.getItem('saveData'+i)) !== null){
                    if(values['username'] === JSON.parse(loc)['username'] && values['password'] === JSON.parse(loc)['password']){
                        this.props.history.push("/");
                        flag=0;
                    }
                }
            })
            if(flag===1){
                message.error('Invalid Username or password');
            }
          }
        });
      }
  
    render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} className="login-form" style={{ width:"350px",margin:'auto', marginTop: "50px"}}>
        <h1>Login Page</h1>
        <FormItem>
            {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
            })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
        </FormItem>
        <FormItem>
            {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
            })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
        </FormItem>
        <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button> Or <Link to="/register"><a href="">register now!</a></Link>
        </FormItem>
        </Form>
    );
  }
}
const LoginPage = (withRouter(Form.create()(Login)));

export default LoginPage;
