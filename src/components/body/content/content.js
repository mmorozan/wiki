import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddWikiPage from "../../routes/addWikiPage";

console.log("content");
console.log(this);
class Content extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path={"/"} exact  render={params => <h2>hellofrom content</h2>} />
          <Route
            path={"/add-wiki"}
            render={params => <AddWikiPage {...params} />}
          />
        </Switch>
      </>
    );
  }
}

export default Content;
