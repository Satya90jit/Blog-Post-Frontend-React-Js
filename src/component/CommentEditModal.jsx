import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
//import { useParams } from "react-router";
//import { useNavigate } from "react-router";

export default function CommentEditModal({
  closeModal,
  isOpen,
  articleId,
  commentId,
}) {
  const [body, setBody] = useState(" ");
  //const [article_id, setArticle_id] = useState(" ");

  const user_id = localStorage.getItem("user");
  const userName = localStorage.getItem("userName");
  const article_id = articleId;
  const comment_id = commentId;

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

    let userComments = await res;
    //console.log(userComments);
    //setCommentData([...commentData, userComments]);

    if (userComments.status !== 200) {
      window.alert("something went wrong");
    } else {
      window.alert("Edit successfully");
      window.location.reload(false);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-80"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Your comment
                  </Dialog.Title>
                  <form action="" className="w-full p-4">
                    <div className="mb-2">
                      <textarea
                        className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                        name="comment"
                        type="text"
                        //value={commentData.body}
                        onChange={(e) => {
                          //setCommentData({ body: e.target.value });
                          setBody(e.target.value);
                        }}
                        placeholder="write commnet...."
                      ></textarea>
                    </div>
                    <div className="mt-1 mb-8 flex justify-between h-auto items-center lg:w-full lg:mt-0 ">
                      <div className="mt-4 ml-10 ">
                        <button
                          type="button"
                          className="inline- text-left  justify-center rounded-md border border-transparent bg-red-400 px-14 py-2 text-sm font-medium text-blue-900 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                         
                          onClick={(e) => {
                            closeModal();
                          }}
                        >
                          close
                        </button>
                      </div>
                      <div className="mt-4 mr-10 ">
                        <button
                          type="button"
                          className="inline-flex text-right justify-center rounded-md border border-transparent bg-blue-100 px-14 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={(e) => {
                            editComment();
                          }}
                        >
                          save
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
