import React, { useEffect, useState } from "react";
import Post from "./Post";
import Modal from "./Modal";
import Stub from "../Stub";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [viewModal, toggleViewModal] = useState(false);

  useEffect(() => {
    const p = Stub.GetPosts();
    if (posts.length === 0) {
      setPosts(p);
    } //no else clause needed
  }, [posts]);

  const toggleModal = (e) => {
    setSelectedPost(e);
    toggleViewModal(!viewModal);
  };

  return (
    <div className="route-div">
      <div style={styles.content}>
        {posts.map(function mapOverPosts(val) {
          return <Post key={val.id} post={val} clickHandler={toggleModal} />;
        })}
      </div>
      {viewModal && <Modal closeModal={toggleModal} post={selectedPost} />}
    </div>
  );
}

const styles = {
  blogHeaderDiv: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  spanBold: {},
  btn: {
    borderRadius: "0",
    border: "1px solid black",
  },
  content: { paddingTop: "20px", paddingLeft: "20px" },
  posts: {
    display: "flex",
    // justifyContent: "flex-start",
    alignItems: "center",
  },
};

export default Blogs;
