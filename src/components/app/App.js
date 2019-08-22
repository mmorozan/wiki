import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import MainHeader from "../header";
import Body from "../body";
import MainFooter from "../footer";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col className="gutter-row" span={24}>
            <MainHeader />
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row" span={24}>
            <Switch>
              <Route path={"/"} render={params => <Body />} />
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row" span={24}>
            <MainFooter />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
