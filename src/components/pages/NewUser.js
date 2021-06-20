import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import "./App.css"
const FormItem = Form.Item;
class NewUser extends Component {

    state = {
        confirmDirty: false,
      };

    handleSubmit = (e) => {
        
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            if (localStorage.id) {
                localStorage.id = Number(localStorage.id)+1;
            } else {
                localStorage.id = 1;
            }
            var saveData = {"data":[{
                "username": values.username,
                "firstname": values.firstname,
                "lastname": values.lastname,
                "password": values.password
            }]};
            console.log('Received values of form: ', saveData["data"][0]);
            localStorage.setItem('saveData'+localStorage.id, JSON.stringify(saveData["data"][0]));
            this.props.history.push("/");
          }
        });
      }

      compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      }
    
      validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }

      handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} className="login-form" style={{ width:"350px",margin:'auto', marginTop: "50px"}}>
        <h1>Registration Page</h1>
        <FormItem>
          User Name: {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
            })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
        </FormItem>
        
        <FormItem>
          First Name: {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input your first name!' }],
            })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="first name" />
            )}
        </FormItem>

        <FormItem>
          Last Name: {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input your last name!' }],
            })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="last name" />
            )}
        </FormItem>
        
        <FormItem>
            Password: {getFieldDecorator('password', {
                rules: [{
                required: true, message: 'Please input your password!',
                }, {
                validator: this.validateToNextPassword,
                }],
            })(
                <Input type="password" />
            )}
        </FormItem>
        
        <FormItem>
            Confirm Password: {getFieldDecorator('confirm_password', {
                rules: [{
                required: true, message: 'Please confirm your password!',
                }, {
                validator: this.compareToFirstPassword,
                }],
            })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
        </FormItem>

        <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Register
            </Button>
        </FormItem>
        </Form>
    );
  }
}

export default (withRouter(Form.create()(NewUser)));
