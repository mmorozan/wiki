import React, { Component } from "react";
//import ReactDOM from "react-dom";
import SideMenu from "./sideMenu";
import Content from "./content";
import { Row, Col } from "antd";

class Body extends Component {
  render() {
    return (
      <>
        <Row>
          <Col className="gutter-row" span={5} style={{borderRight: '1px solid #e8e8e8'}}>
            <SideMenu />
          </Col>
          <Col className="gutter-row" span={19}>
            <Content />
          </Col>
        </Row>
      </>
    );
  }
}

export default Body;
