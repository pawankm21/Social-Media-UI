import React, { useState } from "react";
import MainArea from "../components/MainArea";
import Dockbar from "../components/Dockbar";
import Ads from "../components/Ads";
import {
  ChatAlt2Icon,
  UsersIcon,
  BadgeCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Posts from "../components/Posts";
import Network from "../components/Network";
import CreatePost from "../components/CreatePost";
import { CurrencyDollarIcon } from "@heroicons/react/solid";
import CreateAd from "../components/CreateAd";
import Navbar from "../components/Navbar";

function Personal() {
  const [main, setMain] = useState("Posts");
  const [showPost, setShowPost] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const personalProps = {
    Posts: {
      component: <Posts />,
      button: "Create Post",
      modal: {
        component: <CreatePost show={showPost} setShow={setShowPost} />,
        show: showPost,
        setShow: setShowPost,
      },
    },
    Followers: {
      component: <Network />,
      button: null,
    },

    Following: {
      component: <Network />,
      button: null,
    },
    Earnings: {
      component: <div></div>,
      button: "Create Ad",
      modal: {
        component: <CreateAd show={showAd} setShow={setShowAd} />,
        show: showAd,
        setShow: setShowAd,
      },
    },
  };
  const [TABS] = useState([
    {
      name: "Posts",
      icon: <ChatAlt2Icon />,
    },
    {
      name: "Followers",
      icon: <UserGroupIcon />,
    },
    {
      name: "Following",
      icon: (
        <div className="grid grid-cols-2 w-10">
          <UsersIcon className="" />
          <BadgeCheckIcon />
        </div>
      ),
    },
    {
      name: "Earnings",
      icon: <CurrencyDollarIcon />,
    },
  ]);
  return (
    <div className=" w-full h-full">
      <Navbar/>
      <div className=" p-2 bg-gray-200">
        <img
          src="https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4"
          alt="..."
          class="object-cover h-48 w-full rounded-lg shadow"
        />
        <div className="w-full h-64 md:h-42 bg-white mt-2 shadow">
          <div className="absolute top-52 left-8 text-gray-700 ">
            <img
              src="https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=5"
              alt=""
              className="object-cover h-32  rounded-full w-32 border-8 border-gray-200 "
            />
            <h1 className=" font-bold text-3xl ">John Doe</h1>
            <p className="text-sm md:text-base w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              blanditiis dolorem ducimus voluptas architecto, nihil nostrum
              debitis suscipit nobis, possimus quisquam temporibus harum neque
              ea recusandae deleniti impedit cumque quos!
            </p>
            <div className=" mt-4 text-xs text-gray-400 font-semibold flex gap-4">
              <div>
                Following <p className="text-center text-sm">1</p>{" "}
              </div>
              <div>
                Followers<p className="text-center text-sm">1</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dockbar main={main} setMain={setMain} TABS={TABS} />
      <div className="w-full flex h-full ">
        <div className="md:w-3/4 p-1 w-full">
          <MainArea
            title={main}
            children={personalProps[main].component}
            button={personalProps[main].button}
            modal={
              personalProps[main].button
                ? personalProps[main].modal.component
                : null
            }
            show={
              personalProps[main].button ? personalProps[main].modal.show : null
            }
            setShow={
              personalProps[main].button
                ? personalProps[main].modal.setShow
                : null
            }
          />
        </div>
        <div className="w-1/4 hidden   md:flex p-4 pt-1 h-full">
          <div className=" rounded-md bg-gray-200 w-full h-full pt-10">
            <Ads />
          </div>
        </div>
      </div>
      <footer className="bg-blue-900 h-24 mt-4 w-full"></footer>
    </div>
  );
}

export default Personal;
