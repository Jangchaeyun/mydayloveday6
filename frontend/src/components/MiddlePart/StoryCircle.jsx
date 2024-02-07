import React from "react";
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          sx={{ width: "5rem", height: "5rem" }}
          src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680_1280.jpg"
        >
          <AddIcon sx={{ fontSize: "3rem" }} />
        </Avatar>
        <p>loveday6</p>
      </div>
    </div>
  );
};

export default StoryCircle;
