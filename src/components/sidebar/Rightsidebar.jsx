import React from "react";
import Avatar from "../Avatar";

import { BsMusicNote, BsSoundwave } from "react-icons/bs";

const Rightsidebar = () => {
  const FRIENDS_ACTIVITY = [
    {
      id: 1,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 2,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 3,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 4,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 5,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 6,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 7,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 8,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
    {
      id: 9,
      name: "Cody Fisher",
      image: require("../../assets/burna-boy.jpeg"),
      album: "When You Wake",
      artist: "Shawn Medes",
    },
  ];

  return (
    <div className="w-60 fixed top-0 right-0 h-screen bg-[#000000] text-white p-3">
      <h2 className="text-2xl">Friends Activity</h2>
        {FRIENDS_ACTIVITY.map((friend) => (
          <div className="flex items-center justify-between mb-8 mt-4">
            <Avatar image={friend.image} classNames="mr-4 w-19 h-19" />
            <div>
              <h3 className="text-[#B2B2B2] text-md font-extrabold">{friend.name}</h3>
              <p className="text-xs text-[#B2B2B2] mb-1">{friend.album}</p>
              <div className="flex items-center">
                <BsMusicNote className="mr-1" />
                <p className="text-xs text-[#B2B2B2]">{friend.artist}</p>
              </div>
            </div>

            <div>
              <BsSoundwave />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rightsidebar;
