
import { BellIcon, HeartIcon } from '@heroicons/react/outline'
import React from 'react'
const notifs = [
    {
        id: 1,
        notification: "You have a new message",
        time: "1 min ago",
        icon: <BellIcon/>,
        link: "/messages"

    },
    {

        id: 2,
        notification: "Someone liked your message",
        time: "2 min ago",
        icon: <HeartIcon />,
        link: "/messages"

    },
    {
        id: 3,
        notification: "Someone liked your message",
        time: "2 min ago",
        icon: <HeartIcon />,
        link: "/messages"

    },
    {
        id: 4,
        notification: "Someone liked your message",
        time: "2 min ago",
        icon: <HeartIcon />,
        link: "/messages"
    },

        

]
function Activity() {
    return (
        <div className="pt-0 border-2 ">
            {notifs.map((notif, idx) => {
                return (
                    <button key={idx} className="flex  appearance-none w-full focus:ring-4 ring-indigo-400 justify-between shadow items-center p-4 bg-white rounded-lg mt-6 mb-6 text-blue-900">
                        <div className="flex items-center w-full">
                            <div className="w-8">{notif.icon}</div>
                            <span className="ml-2">{notif.notification}</span>
                        </div>
                        <span className="text-gray-500">{notif.time}</span>
                    </button>
                )
            })}
            
        </div>
    )
}

export default Activity
