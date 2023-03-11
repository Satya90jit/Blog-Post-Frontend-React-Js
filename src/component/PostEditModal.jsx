import { Dialog, Transition } from '@headlessui/react'
import { Fragment,} from 'react'

export default function PostEditModal({ closeEditModal, isOpen }) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeEditModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
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
                    Edit your post
                  </Dialog.Title>
                  <form action="" className="w-full p-4">
                    <div className="mb-2">
                      <input
                        className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                        name="title"
                        type="text"
                        //value={commentData.body}
                        // onChange={(e) => {
                        //   //setCommentData({ body: e.target.value });
                        //   setTitle(e.target.value);
                        // }}
                        placeholder="write commnet...."
                      ></input>
                      <textarea
                        className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                        name="body"
                        type="text"
                        //value={commentData.body}
                        // onChange={(e) => {
                        //   //setCommentData({ body: e.target.value });
                        //   setBody(e.target.value);
                        // }}
                        placeholder="write commnet...."
                      ></textarea>
                      {/* <select className='form-control' value={" bj"} onChange={"kjh"} >
                        <option selected>choose student</option>
                        {s.map((student, index) => (
                          <option value={"gj"} key={"kh"} >{"mbj"}</option>
                        ))
                        }
                      </select> */}
                      <input
                        className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                        name="comment"
                        type="text"
                        //value={commentData.body}
                        // onChange={(e) => {
                        //   //setCommentData({ body: e.target.value });
                        //   setBody(e.target.value);
                        // }}
                        placeholder="write commnet...."
                      ></input>
                    </div>
                    <div className="mt-1 mb-8 flex justify-between h-auto items-center lg:w-full lg:mt-0 ">
                      <div className="mt-4 ml-10 ">
                        <button
                          type="button"
                          className="inline- text-left  justify-center rounded-md border border-transparent bg-red-400 px-14 py-2 text-sm font-medium text-blue-900 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                          onClick={closeEditModal}
                        >
                          close
                        </button>
                      </div>
                      <div className="mt-4 mr-10 ">
                        <button
                          type="button"
                          className="inline-flex text-right justify-center rounded-md border border-transparent bg-blue-100 px-14 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          // onClick={(e) => {
                          //   editComment();
                          // }}
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
  )
}
