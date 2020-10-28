import React from "react";
import { connect } from "react-redux";

import Article from "../components/Article/Article";
import AddArticle from "../components/AddArticle/AddArticle";
import { simulateHttpRequest } from "../store/actionCreators";

const Articles = ({ articles, saveArticle }) => (
  <div>
    <AddArticle saveArticle={saveArticle} />
    {articles.map((article) => (
      <Article key={article.id} article={article} />
    ))}
  </div>
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
    saveArticle: (article) => dispatch(simulateHttpRequest(article))
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
