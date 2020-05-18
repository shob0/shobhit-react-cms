import React, { useEffect } from "react";

function Modal(props) {
  useEffect(() => {
    document.getElementById("modal-text").innerHTML = props.post.content;
  });

  return (
    <div className="modal-bg" style={Styles.modalBg}>
      <div className="modal" style={Styles.modal}>
        <div className="modal-header" style={Styles.modalHeader}>
          <div className="modal-header-title" style={Styles.modalHeaderTitle}>
            {props.post.title}
          </div>
          <div
            className="modal-header-close-btn"
            style={Styles.modalHeaderCloseBtn}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={props.closeModal}
              style={Styles.modalCloseBtn}
            >
              <span>&times;</span>
            </button>
          </div>
        </div>
        <hr />
        <div className="modal-content">
          <div
            className="modal-body"
            id="modal-text"
            style={Styles.modalBody}
          ></div>
        </div>
      </div>
    </div>
  );
}

const Styles = {
  modalBg: {
    position: "fixed",
    zIndex: "1",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  modal: {
    backgroundColor: "#fefefe",
    margin: "5% auto",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "5px",
    width: "80%",
  },

  modalHeaderCloseBtn: {
    color: "#aaa",
    float: "right",
    top: "0",
  },
  modalCloseBtn: {
    backgroundColor: "inherit",
    transform: "scale(3)",
    border: "none",
    cursor: "pointer",
  },

  modalHeaderTitle: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  modalBody: {
    marginTop: "2%",
    height: "450px",
    overflowY: "scroll",
  },
};

export default Modal;
