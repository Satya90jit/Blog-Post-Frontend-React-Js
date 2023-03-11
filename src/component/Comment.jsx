import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import CommentEdit from "./CommentEdit";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import MyModal from "./CommentEditModal";
import CommentEditModal from "./CommentEditModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Comment() {
  const [body, setBody] = useState("");
  const [commentData, setCommentData] = useState(undefined);
  const [comArtId, setComArtId] = useState("");
  const [comId, setComId] = useState("");
  const [clength, setClength] = useState("");
  const [show, setShow] = useState(false);
  const params = useParams();

  //test modals
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  //test modals
  const showc = () => {
    setShow(!show);
  };

  const postComment = async (e) => {
    e.preventDefault();
    const article_id = `${params.id}`;
    console.log(article_id);
    const user_id = localStorage.getItem("user");
    const userName = localStorage.getItem("userName");
    console.log(body, article_id, user_id);
    const myData = { body, article_id, user_id, userName };
    const res = await fetch("/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myData),
    });

    let userComments = await res.json();
    console.log(userComments);
    setBody("");
    setCommentData([...commentData, userComments]);

    if (userComments.status == 200) {
      window.alert("comment not posted yet!");
    } else {
      window.alert("Thanks for comment");
    }
  };
  const userId = localStorage.getItem("user");
  //delete comments

  const deleteComment = async (e, x) => {
    e.preventDefault();
    console.log(x);
    const res = await fetch(`/comments/${x}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const deletedComment = await res;
    const updatedComments = commentData.filter((item, id) => item.id !== x);
    setCommentData(updatedComments);

    if (deletedComment.status == 200) {
      window.alert("comment deleted successfully");
    } else {
      window.alert("somethinng went wrong!");
    }
  };
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/comment/?article_id=${params.id}`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setClength(data.length);

        setCommentData(data);
      } catch (error) { }
    };
    fetchComments();
  }, [params.id]);

  return (
    <>
      <section className=" mt-1 dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion ({clength})
            </h2>
          </div>

          <div className=" w-full rounded-lg mx-auto mb-7 shadow-md shadow-blue-600/50">
            <form action="" className="w-full p-4">
              <div className="mb-2">
                <label for="comment" className="text-lg text-gray-600">
                  Write comment here
                </label>
                <textarea
                  className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                  type="text"
                  name="body"
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                  placeholder="write commnet...."
                ></textarea>
              </div>
              <div className=" flex justify-between h-auto items-center ">
                <div className="text-right">
                  <button
                    type="submit"
                    onClick={postComment}
                    className="px-3 py-2 text-sm text-black  rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="text-left">
                  <span
                    onClick={showc}
                    className="px-2 py-1 text-xs text-blue-100 bg-gray-900 rounded"
                  >
                    {show ? "hide" : "show"}
                  </span>
                </div>
              </div>
            </form>
          </div>

          {show ? (
            <div className="relative">
              {commentData?.length === 0 ? (
                <h1 className="font-mono text-center text-4xl">NO Comments!</h1>
              ) : (
                commentData?.map((com, index) => {
                  return (
                    <article className="p-6 mb-6 text-base bg-slate-200 rounded-lg dark:bg-gray-900">
                      <footer className="flex justify-between items-center mb-2">
                        <div>
                          <div className=" flex justify-between h-auto items-center lg:w-full lg:mt-0 ">
                            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                              <img
                                className="mr-2 w-6 text-left h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt="Michael Gough"
                              />
                              <span className="ml-1"> by{com.userName}</span>
                              <span className="ml-2"> {com.created_at}</span>
                            </p>
                          </div>
                          <div className="ml-5">
                            <CommentEditModal articleId={comArtId} commentId={comId} closeModal={closeModal} isOpen={isOpen} />
                          </div>
                        </div>
                        {com.user_id == userId ? (
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex mr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100">
                                <span className="sr-only">Open user menu</span>
                                {/* <Bars3Icon 
                                className="block h-6 w-6  text-black"
                                aria-hidden="true"
                              /> */}
                                <svg
                                  class="w-6 h-6 text-black"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  ></path>
                                </svg>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-8 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={(e) => {
                                        setComArtId(com.article_id);
                                        setComId(com.id);
                                        openModal();
                                      }}
                                      // to={`/CommentEdit/${com.id}`}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block text-left px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Edit
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <span
                                      onClick={(e) => deleteComment(e, com.id)}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block text-left px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Delete
                                    </span>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : (
                          " "
                        )}
                      </footer>
                      <p className="text-gray-600 dark:text-gray-400">
                        {com.body}
                      </p>
                      <div className="flex items-center mt-4 space-x-4"></div>
                    </article>
                  );
                })
              )}
            </div>
          ) : (
            " "
          )}
        </div>
      </section>
    </>
  );
}
export default Comment;
