import * as actionTypes from "./actionTypes";

const initialState = {
  articles: [
    { id: 1, title: "Test 1", body: "Training for react redux" },
    { id: 2, title: "Test 2", body: "Training for react redux" }
  ]
};

// Reducer is a pure function that receives the old state
// and an action as arguments, and returns the updated state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), // this is just an example
        title: action.article.title,
        body: action.article.body
      };

      return {
        ...state,
        articles: state.articles.concat(newArticle)
      };

    case actionTypes.DELETE_ARTICLE:
      const newArticles = state.articles.filter(
        (article) => article.id !== action.article.id
      );

      return {
        ...state,
        articles: newArticles
      };

    default:
      break;
  }
  return state;
};

export default reducer;
