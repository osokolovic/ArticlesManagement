import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Articles from "./containers/Articles";
import AddArticle from "./components/AddArticle/AddArticle";
import ArticleNavbar from "./components/Navbar/Navbar";
import ItemMessage from "./components/ItemMessage/ItemMessage";
import { simulateHttpRequest, alterMessage } from "./store/actionCreators";

const Test = () => {
  return <h2>This is test component</h2>;
};

const App = ({ saveArticle, message, alterMessage }) => {
  return (
    <Container fluid className="App">
      <Router>
        <Row>
          <Col sm={12} md={12}>
            <ArticleNavbar />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <Switch>
              <Route path="/articles">
                <Articles />
              </Route>
              <Route path="/add">
                <AddArticle
                  saveArticle={saveArticle}
                  alterMessage={alterMessage}
                />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
            </Switch>
          </Col>
        </Row>
        <ItemMessage message={message} alterMessage={alterMessage} />
      </Router>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // before thunk, in dispatch argument we had addArticle
    saveArticle: (article) => dispatch(simulateHttpRequest(article)),
    alterMessage: (message) => dispatch(alterMessage(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
