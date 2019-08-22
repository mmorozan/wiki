import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Icon, Row, Col } from "antd";
import MySearch from "./search";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const style = {
  search: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
};
class SideMenu extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <>
        <Row>
          <Col className="gutter-row" span={24} style={style.search}>
            <MySearch />
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row" span={24}>
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ border: "none" }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>База данных</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <NavLink to={"/"}>Главная</NavLink>
                </Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>JavaScript</span>
                  </span>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>PHP</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </>
    );
  }
}

export default SideMenu;
