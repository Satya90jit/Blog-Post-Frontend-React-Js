import React, { useState, useEffect } from "react";
import { Router, useParams } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function CommentEdit({articleId, commentId}) {
  const [body, setBody] = useState(" ");
  //const [article_id, setArticle_id] = useState(" ");
  const params = useParams();
  const navigate = useNavigate();

  const user_id = localStorage.getItem("user");
  const userName = localStorage.getItem("userName");
  const article_id = articleId
  const comment_id = commentId

  const editComment = async (e) => {
    console.log(body, article_id, user_id, userName, comment_id);
    const myData = { body, article_id, user_id, userName };
    const res = await fetch(`/comments/${comment_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myData),
    });

    let userComments = await res
    //console.log(userComments);
    //setCommentData([...commentData, userComments]);

    if (userComments.status !== 200) {
      window.alert("something went wrong");
    } else {
      window.alert("Edit successfully");
      window.location.reload(false);
    }

    // window.location("http://localhost:5000/Comment/128")
  };
  
  // useEffect(() => {
  // const fetchComment = async () => {
  //   try {
  //     const response = await fetch(`/comments/${params.id}`);
  //     if (!response.ok) {
  //       throw new Error(
  //         `This is an HTTP error: The status is ${response.status}`
  //       );
  //     }
  //     const data = await response
  //     // const article = data.article_id;
  //     // console.log(article);
  //     // setArticle_id(article);
  //   } catch (error) {}
  // };
  // fetchComment();
  // }, [params.id]);

  return (
    <>
      <div className=" w-full rounded-lg mx-auto my-16 shadow-md shadow-blue-600/50">
        <form action="" className="w-full p-4">
          <div className="mb-2">
            <label for="comment" className="text-lg text-gray-600">
              Edit your comment
            </label>
            <textarea
              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="comment"
              type = "text"
              //value={commentData.body}
              onChange={(e) => {
                //setCommentData({ body: e.target.value });
                setBody(e.target.value);
              }}
              placeholder="write commnet...."
            ></textarea>
          </div>
          <div>
            <a
            href="http://localhost:5000/Comment/128"
            // to={'/Comment/:id'}
            // to={" /"}
              onClick={editComment}
              className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
            >
              save
            </a>
            {/* <button
             // onClick={editToPost()}
              className=" float-left px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
            >
              back
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
}
export default CommentEdit;
