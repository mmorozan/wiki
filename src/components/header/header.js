import React, { Component } from "react";
import MainMenu from "./menu";
import { Row, Col } from "antd";

class MainHeader extends Component {
  render() {
    return (
      <Row>
        <Col className="gutter-row" span={24}>
          <MainMenu />
        </Col>
      </Row>
    );
  }
}

export default MainHeader;
