import React from "react";
import { Avatar, Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import StoryCircle from "./StoryCircle";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";

const story = [1, 1, 1, 1, 1, 1];
const posts = [1, 1, 1, 1, 1, 1, 1];
const MiddlePart = () => {
  const handleOpenCreatePostModal = () => {
    console.log("open post model");
  };
  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            // src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680_1280.jpg"
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            readOnly
            className="outline-none w-[90%] bg-slate-100 rounded-full px-5 bg-transparent border-[#4AB34A	] border"
            type="text"
          />
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="success" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
            </IconButton>
            <span>사진</span>
          </div>
          <div className="flex items-center">
            <IconButton color="success" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
            </IconButton>
            <span>동영상</span>
          </div>
          <div className="flex items-center">
            <IconButton color="success" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span>글 쓰기</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {posts.map((item) => (
          <PostCard />
        ))}
      </div>
    </div>
  );
};

export default MiddlePart;
