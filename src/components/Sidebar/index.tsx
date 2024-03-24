import React from "react";
import { Camera, Video, PlayCircle, Clock, History, Download } from "lucide-react";

const SIDEBAR_ACTIONS =   [
   
    {
        label: "Shorts",
        icon: <Video size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false,
        type: 'action'
    },
    {
        label: "Subscriptions",
        icon: <Camera size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false
    },
    {
        label: "Youtube Music",
        icon: <PlayCircle size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false
    },
    {
         
        type: 'divider'
    },
    {
        label: "Your Channel",
        icon: <Video size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false,
        type: 'action'
    },
    {
        label: "History",
        icon: <History size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false
    },
    {
        label: "Your Videos",
        icon: <PlayCircle size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false
    },
    {
        label: "Watch Later",
        icon: <Clock size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false
    },
    {
        label: "Downloads",
        icon: <Download size={24} />,
        onClick: () => {
            console.log("camera clicked");
        },
        active: false
    },
]

const SidebarAction = (props:any) => {
    if(props.type === "divider"){
        return (<div className="divider border-b-1 my-8"></div>)
    }

  return (
    <div className="cursor-pointer rounded-lg  w-full flex p-2  hover:bg-gray-300">
      <span className="pl-4 pr-8">
        {props.icon}
      </span>
      <span className="">{props.label}</span>
    </div>
  );
};

export const Sidebar = () => {
  return <div className="flex w-full flex-col">
     <div className="cursor-pointer rounded-lg bg-gray-100 w-full flex p-2  hover:bg-gray-300">
      <span className="pl-4 pr-8">
        <Camera />
      </span>
      <span className="">Home</span>
    </div>
    {
        SIDEBAR_ACTIONS.map( (action) => <SidebarAction {...action}  />)
    }
    
 
  </div>;
};
