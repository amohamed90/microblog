import React, { useState, useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Post from './Post';
import PostForm from './PostForm';
import Comments from './Comments';
import {
  loadPostDetailFromAPI,
  deletePostToBackEnd,
  addCommentToPost,
  deleteCommentToBackEnd
} from './actions';

function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [editing, setEditing] = useState(false);
  const post = useSelector(st => st.posts[id]);
  const error = useSelector(st => st.error);

  const deletePostFn = (id) => {
    dispatch(deletePostToBackEnd(id));
    history.push("/");
  };

  const addCmt = (id, comment) => {
    dispatch(addCommentToPost(id, comment));
  };
  
  const deleteCmt = (id, commentId) => {
    dispatch(deleteCommentToBackEnd(id, commentId))
  };

  useEffect(() => {
    if (!post) {
      dispatch(loadPostDetailFromAPI(id));
    }
  }, [id, dispatch, post])

  if (error) {
    return <Redirect to='/notFound' />
  }
  const loadedPage = post ? <div className="PostDetail">
    {editing
      ? <PostForm post={post}
        editing="true"
        setEditing={setEditing}
        postId={id} />
      : <Post post={post}
        setEditing={setEditing}
        deletePost={deletePostFn}
        postId={id} />}
    <hr />
    <Comments comments={post.comments}
      add={addCmt}
      remove={deleteCmt} />
  </div>
    : "";

  const loadingPage = <div>Loading post...</div>

  return post ? loadedPage : loadingPage
}

export default PostDetail;