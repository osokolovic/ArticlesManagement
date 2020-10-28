import * as actionTypes from "./actionTypes";

// The reducer handles only synchronous code.
// To execute the async code, we need to use an action creator
// It's a function that returns function or an action

// This one returns the type of the action and the value
// article is the same as "article: article" (ES6 syntax)
export const addArticle = (article) => {
  return {
    type: actionTypes.ADD_ARTICLE,
    article
  };
};

// http reques simulation
// reaceives article and returns a function
// Due to thunk middleware, we can access to dispatch because our
// middleware runs between the dispatching of our action
// and the point of time the action reaches the reducer.
// Therefore, we can get dispatch as an argument.
export const simulateHttpRequest = (article) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addArticle(article));
    }, 3000);
  };
};
