import React from "react";
import { connect } from "react-redux";
/* import PropTypes from "prop-types"; */
import { login } from "../../../actions/auth";
import { Form, Icon, Input, Button /* , Checkbox  */ } from "antd";
// import CryptoJS from "crypto-js";

class LoginPage extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };
  onSubmit = data => {
    this.props.history.push("/realHomePage");

    console.log(this.props);
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  handleSubmit = e => {
    e.preventDefault();
    // let password1 = "" + CryptoJS.SHA256(this.refs.password.state.value);
    let temp = {
      username: "ariunkhuslen",
      password: "password1"
    };
    this.props.login(temp);

    /* this.props.login(); */
    /* this.props.login(temp) */
    /* this.props.history.push("/realHomePage"); */
    /* console.log("yaag darsan", e.target);
    console.log(this.props); */
  };

  render() {
    return (
      <div className="container"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            position: "absolute",
            top: "50vh",
            width: "45vh",
            padding: "16px 32px",
            top: "35vh",
            borderRadius: "20px",
          }}
        >
          <h1>Login page</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                name="username"
                ref="username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                name="password"
                ref="password"
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                Log in
              </Button>
              <br /> Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: login
  };
};

export default connect(mapStateToProps)(LoginPage);