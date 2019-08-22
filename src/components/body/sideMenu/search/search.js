import React, { Component } from "react";
import { Menu, Icon, Input, Row, Col } from "antd";

const { Search } = Input;

class MySearch extends Component {
  render() {
    return (
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    );
  }
}

export default MySearch;
