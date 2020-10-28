import React from "react";
import { connect } from "react-redux";
import { Jumbotron, Row, Col, Card, Button } from "react-bootstrap";

import Article from "../components/Article/Article";
import { removeArticle } from "../store/actionCreators";

const Articles = ({ articles, removeArticle }) => (
  <Jumbotron>
    <Row>
      {articles.map((article) => (
        <Col md={4} sm={4} key={article.id} style={{ marginBottom: "3%" }}>
          <Card>
            <Card.Body>
              <Article article={article} />
              <Button
                className="float-right"
                variant="danger"
                onClick={() => removeArticle(article)}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Jumbotron>
);

// this function is used to get our state from the redux store
// the function receives the state stored in redux as parameter
// and returns a JS object that will hold our articles
const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

// receives a function dispatch as parameter.
// Returns an object which has a property saveArticle.
// This prop is a reference to a function that will dispatch an
// action in our store.
// We must use action creator to execute asynchronous code
const mapDispatchToProps = (dispatch) => {
  return {
    // before thunk, in dispatch argument we had addArticle
    removeArticle: (article) => dispatch(removeArticle(article))
  };
};

// Connectiong component to redux store:
// To reach the store we need to pass mapStateToProps to
// the connect function.
// Connect function will take our component Articles and return a wrapper
// component with the props it injects.
// That means state is now accessible from the store.
// The state is received by the component through props.
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
