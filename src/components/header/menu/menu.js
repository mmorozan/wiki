import React, { Component } from "react";
import "antd/dist/antd.css";
//import "./index.css";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import { addWiki } from "../../../store/ac";
//import { selectLoading } from "../../../store/selectors";
import { NavLink } from "react-router-dom";

//const { SubMenu } = Menu;

class MainMenu extends Component {
  state = {
    current: "mail",
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
    addWiki({ tttest: "ffdgdg" });
    console.log("this props", this.props);
    this.props.testDispatch({ test: 123 });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          style={{ height: "100%" }}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <NavLink to={"/"} >
              <Icon type="home" />
              Главная
            </NavLink>
          </Menu.Item>
          <Menu.Item key="plus-circle" >
            <NavLink to={"/add-wiki"} >
              <Icon type="plus-circle" />
              Новая WIKI
            </NavLink>
          </Menu.Item>
          <Menu.Item key="front" style={{ float: "right" }}>
            <a href="/" rel="noopener noreferrer">
              <Icon type="link" />
              Фронт-офис
            </a>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

const mapStateToProps = state => ({
  countFromStore: state["WIKI"]
});

const mapDispatchToProps = dispatch => ({
  testDispatch: obj => dispatch(addWiki(obj))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
