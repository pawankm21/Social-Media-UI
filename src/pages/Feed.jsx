import React, { useState } from "react";
import Dockbar from "../components/Dockbar";
import Ads from "../components/Ads";
import MainArea from "../components/MainArea";
import Posts from "../components/Posts";
import Network from "../components/Network";
import Activity from "../components/Activity";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import {
  HomeIcon,
  BellIcon,
  VideoCameraIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

function Feed() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const AreaProps = {
    Home: {
      component: <Posts />,
      button: "Create Post",
      modal: {
        component: (
          <CreatePost show={showCreatePost} setShow={setShowCreatePost} />
        ),
        show: showCreatePost,
        setShow: setShowCreatePost,
      },
    },
    Stream: {
      component: <div>Stream</div>,
      button: "New Stream",
      modal: {
        component: <div>New Stream</div>,
        show: false,
        setShow: () => {},
      },
    },
    Activity: {
      component: <Activity />,
      button: null,
    },
    Network: {
      component: <Network />,
      button: null,
    },
  };
  const [main, setMain] = useState("Home");
  const [TABS] = useState([
    {
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      name: "Activity",
      icon: <BellIcon />,
    },
    {
      name: "Stream",
      icon: <VideoCameraIcon />,
    },
    {
      name: "Network",
      icon: <UserGroupIcon />,
    },
  ]);

  return (
    <div className=" w-full h-full bg-gray-200">
      <Navbar />
      <Dockbar main={main} setMain={setMain} TABS={TABS} />
      <div className="w-full flex h-full">
        <div className="w-3/4 p-1">
          <MainArea
            title={main}
            children={AreaProps[main].component}
            button={AreaProps[main].button}
            modal={
              AreaProps[main].button ? AreaProps[main].modal.component : null
            }
            show={AreaProps[main].button ? AreaProps[main].modal.show : null}
            setShow={
              AreaProps[main].button ? AreaProps[main].modal.setShow : null
            }
          />
        </div>
        <div className="w-1/3  flex p-4 pt-1 h-full">
          <div className=" rounded-md bg-gray-200 w-full h-full pt-10">
            <Ads />
          </div>
        </div>
      </div>
      <footer className="bg-blue-900 mt-4 h-24 w-full"></footer>
    </div>
  );
}

export default Feed;
