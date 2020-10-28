import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import * as articleMessages from "../../constants/ArticleMessages";

import "./AddArticle.css";

const AddArticle = ({ saveArticle, alterMessage }) => {
  // state is used for controlled input
  const [article, setArticle] = useState();

  // how to handle whole object data
  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    if (validateInputData()) {
      // article is used from the state
      saveArticle(article);
      alterMessage({
        type: "Success",
        content: articleMessages.articleAdded,
        show: true
      });
    }
  };

  const validateInputData = () => {
    let message = "";
    if (article === undefined || article.title === "") {
      message += articleMessages.titleEmpty + "\n";
    }
    if (article === undefined || article.body === "") {
      message += articleMessages.bodyEmpty;
    }

    if (message !== "") {
      alterMessage({ type: "Error", content: message, show: true });
      return false;
    }

    return true;
  };

  return (
    <Form onSubmit={addNewArticle}>
      <Form.Group>
        <Form.Control
          size="md"
          type="text"
          placeholder="Title"
          id="title"
          onChange={handleArticleData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows="5"
          id="body"
          placeholder="Body"
          onChange={handleArticleData}
        />
      </Form.Group>
      <Button className="float-right" variant="success" type="submit">
        Add article
      </Button>
    </Form>
  );
};

export default AddArticle;
