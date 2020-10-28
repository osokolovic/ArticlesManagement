import React, { useState } from "react";
import "./AddArticle.css";

const AddArticle = ({ saveArticle }) => {
  // state is used for controlled input
  const [article, setArticle] = useState();

  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    // article is used from the state
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  );
};

export default AddArticle;
