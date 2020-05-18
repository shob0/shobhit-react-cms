import React from "react";
/**
 * post object in props contains beloe value ie. props.post
 * id: Number
 * Title: String
 * Content: Long text String
 * Date Created: Date
 * Author: String
 *
 */
function Post(props) {
  let post = props.post;
  let contentShow = post.visibleData;

  return (
    <div className="post sideDiv" style={styles.post}>
      <button
        type="button"
        style={styles.btn}
        className="post-btn"
        onClick={() => {
          props.clickHandler(props.post);
        }}
      >
        <div style={styles.postData}>
          <div>
            <hr className="divider" />
          </div>
          <h2>{post.title}</h2>
        </div>
        <div className="post-content" style={styles.postContent}>
          <span style={styles.contentSpan}>
            {contentShow}
            <span>...</span>
          </span>
        </div>
      </button>
      <hr />
    </div>
  );
}

const styles = {
  post: { cursor: "pointer", marginTop: "1px" },
  postContent: {
    marginLeft: "30px",
    display: "box",
  },
  contentSpan: {
    width: "75vw",
    overflow: "hidden",
    display: "block",
    textOverflow: "ellipsis",
  },
  btn: {
    border: "none",
    textAlign: "left",
    font: "inherit",
    backgroundColor: "inherit",
    cursor: "pointer",
  },
  postData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

export default Post;
