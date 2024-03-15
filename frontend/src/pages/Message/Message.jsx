import React from "react";
import WestIcon from "@mui/icons-material/West";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SearchUser from "../../components/SearchUser/SearchUser";
import "./Message.css";
import UserChatCard from "./UserChatCard";
import ChatMessage from "./ChatMessage";

const Message = () => {
  const handleSelectImage = () => {
    console.log("handle select image...");
  };
  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5" item xs={3}>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <WestIcon />
                <h1 className="font-xl font-bold">홈</h1>
              </div>
              <div className="h-[83vh]">
                <div className="">
                  <SearchUser />
                </div>
                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  <UserChatCard />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="h-full" item xs={9}>
          <div>
            <div className="flex justify-between items-center border-1 p-5">
              <div className="flex items-center space-x-3">
                <Avatar src="https://mblogthumb-phinf.pstatic.net/MjAyMTA4MjJfMjQ0/MDAxNjI5NTg1ODE2ODcz.JEcQTYuxRsD9ExHFjT6uhK5RefXxP3Oc0MWq7QLpYagg.Nc0BniHfceL8ptHmtZl7yWEXTdtqNCEEL3N1WUtgLGAg.JPEG.yevely001/IMG_3495.jpg?type=w800" />
                <p>myday6</p>
              </div>
              <div className="flex space-x-3">
                <IconButton>
                  <AddIcCallIcon />
                </IconButton>
                <IconButton>
                  <VideoCallIcon />
                </IconButton>
              </div>
            </div>
            <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
              <ChatMessage />
            </div>
          </div>
          <div className="sticky bottom-0 border-l">
            <div className="py-5 flex items-center justify-center space-x-5">
              <input
                className="bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5"
                placeholder="메시지 입력..."
                type="text"
              />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  className="hidden"
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <AddPhotoAlternateIcon />
                </label>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
