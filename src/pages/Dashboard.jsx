import {
  ArchiveIcon,
  BanIcon,
  LibraryIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import React from "react";
import CardDashboard from "../components/CardDashboard";
import Table from "../components/Table";
import GraphView from "../components/GraphView";
// const cols = {
//   Headings: ["Post ID", "Details", "Status", "Date"],
// };
function Dashboard() {
  const requestCol = ["id", "author", "timestamp", "body"];
  const requests = [
    {
      id: 1,
      author: "Pete Hunt",
      timestamp: "1/1/2016",
      body: "Request for inappropriate comment",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      body: "Request for inappropriate comment",
    },
    {
      id: 3,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      body: "Request for inappropriate comment",
    },
  ];
  const adCols = ["id", "author", "timestamp"];
  const ads = [
    {
      id: 1,
      author: "Pete Hunt",
      timestamp: "1/1/2016",
      url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      ////url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
    {
      id: 2,
      author: "Jordan Walke",
      timestamp: "1/12/2016",
      //url: "https://www.google.com",
    },
  ];

  return (
    <div className="w-full pr-4 ">
      <div className="w-full lg:flex ">
        <div className="lg:w-2/3">
          <div className=" lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 lg:gap-1">
            <CardDashboard
              name="Users"
              value="2233242"
              Icon={<UserGroupIcon />}
            />
            <CardDashboard
              name="Posts"
              value="1231121"
              Icon={<LibraryIcon />}
            />
            <CardDashboard name="Reported" value="1231" Icon={<BanIcon />} />
            <CardDashboard
              name="Ad requests"
              value="1231"
              Icon={<ArchiveIcon />}
            />
          </div>
          <div className="  bg-white m-2 rounded ">
            <GraphView />
          </div>
        </div>

        <div className="w-full lg:w-1/3 m-0 ">
          <Table cols={adCols} data={ads} />
        </div>
      </div>
      <div className="w-full m-auto">
        <Table cols={requestCol} data={requests} className="m-auto" />
      </div>
    </div>
  );
}

export default Dashboard;
