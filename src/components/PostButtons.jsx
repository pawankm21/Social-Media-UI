import React, { useState } from "react";
import {
  ThumbUpIcon,
  ThumbDownIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import classNames from 'classnames'
function PostButtons({ post }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  function handleLike(e) {
    setLike(!like);

    console.log("clicked ", e.target.id);
  }
  function handleDislike(e) {
    console.log("clicked ", e.target.id);
    setDislike(!dislike);
  }
  function handleBookmark(e) {
    console.log("clicked ", e.target.id);
    setBookmark(!bookmark);
  }

  return (
    <div className=" m-auto mt-2 mb-1 w-1/3 grid rounded-sm grid-cols-4 gap-4 justify-items-center text-center  text-xs">
      <span>
        <ThumbUpIcon
          className={classNames("text-green-500",like ? "h-5 fill-current" : "h-5")}
          id="like"
          onClick={handleLike}
          on
        />
        {post.likes}
      </span>
      <span>
        <ThumbDownIcon
          className={classNames(dislike ? "h-5 fill-current" : "h-5","text-red-400")}
          id="dislike"
          onClick={handleDislike}
        />
        {post.dislikes}
      </span>
      <span>
        <ShareIcon className="h-5 text-blue-600" id="share" />
      </span>
      <span>
        <BookmarkIcon
          className={classNames(bookmark ? "h-5 fill-current" : "h-5","text-yellow-400")}
          onClick={handleBookmark}
        />
      </span>
    </div>
  );
}

export default PostButtons;
