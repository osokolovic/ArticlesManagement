import React from "react";
import { Toast, ToastBody, Row, Col } from "react-bootstrap";

const ItemMessage = ({ message, alterMessage }) => {
  const emptyMessage = {
    type: "Success",
    content: "",
    show: false
  };

  const handleMessageClosing = () => {
    //funkcija koja ce izbrisati poruku
    alterMessage(emptyMessage);
  };

  return (
    <Row style={messageStyle}>
      <Col>
        <Toast
          show={message.show}
          onClose={handleMessageClosing}
          className="float-right"
        >
          <Toast.Header>
            <strong className="mr-auto">{message.type}</strong>
          </Toast.Header>
          <ToastBody>{message.content}</ToastBody>
        </Toast>
      </Col>
    </Row>
  );
};

const messageStyle = {
  position: "absolute",
  bottom: 10,
  right: 15,
  zIndex: 9999
};

export default ItemMessage;
