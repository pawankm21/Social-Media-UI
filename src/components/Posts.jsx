import React, { useState } from "react";
import PostButtons from "./PostButtons";
import classNames from "classnames";
function Posts() {
  const [POSTS, setPOSTS] = useState([
    {
      id: 1,
      title: "Post 1",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quis temporibus numquam suscipit. In, vel enim! Ducimus quibusdam porro nemo! Omnis, id vero magni autem eaque ab accusantium quaerat quia. ",
      likes: 10,
      dislikes: 2,
      author: "John Doe",
      link: "https://www.google.com",
      img: "https://picsum.photos/200/300",
      time: "2 days ago",
      liked: false,
      images: [],
    },
    {
      id: 2,
      title: "Post 2",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quis temporibus numquam suscipit. In, vel enim! Ducimus quibusdam porro nemo! Omnis, id vero magni autem eaque ab accusantium quaerat quia. ",
      likes: 10,
      dislikes: 2,
      author: "John Doe",
      img: "https://picsum.photos/200/300",
      link: "https://www.google.com",
      time: "2 days ago",
      liked: false,
      images: [],
    },
    {
      id: 3,
      title: "Post 3",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quis temporibus numquam suscipit. In, vel enim! Ducimus quibusdam porro nemo! Omnis, id vero magni autem eaque ab accusantium quaerat quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quis temporibus numquam suscipit. In, vel enim! Ducimus quibusdam porro nemo! Omnis, id vero magni autem eaque ab accusantium quaerat quia.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quis temporibus numquam suscipit. In, vel enim! Ducimus quibusdam porro nemo! Omnis, id vero magni autem eaque ab accusantium quaerat quia.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quis temporibus numquam suscipit. In, vel enim! Ducimus quibusdam porro nemo! Omnis, id vero magni autem eaque ab accusantium quaerat quia.",
      likes: 10,
      dislikes: 2,
      author: "John Doe",
      img: "https://picsum.photos/200/300",
      link: "https://www.google.com",
      time: "2 days ago",
      liked: false,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
    },
  ]);
  return (
    <div className="w-full m-0">
      {POSTS.map((post, idx) => {
        return (
          <div className="w-full bg-white text-gray-700 p-2 md:p-4 md:pb-0 pb-0 rounded-xl border shadow mt-2 border-gray-100">
            <div className="flex mb-2">
              <img
                src={post.img}
                alt=""
                className=" mr-2 rounded-full  h-12 w-12"
              />
              <div className=" self-center">
                <h1 className=" text-blue-500 font-semibold text-sm ">
                  {post.author}
                </h1>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
            </div>

            <div className="w-5/6 m-auto">
              <h1 className="font-bold text-gray-600 text-center m-2 text-lg">
                {post.title}
              </h1>
              <div
                className={classNames(
                  "grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 m-4",post.images.length>0? "":"hidden"
                )}
              >
                {post.images.map((image, idx) => {
                  return (
                    <img src={image} alt="" className="rounded-lg shadow-sm" />
                  );
                })}
              </div>
              <p className="text-xs md:text-base">{post.body}</p>
            </div>
            <div className="border-gray-400 border-t p-0 mt-4">
              <PostButtons post={post} setPost={setPOSTS} idx={idx} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
