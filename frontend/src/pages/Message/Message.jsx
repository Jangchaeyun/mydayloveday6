import React, { useEffect, useState } from "react";
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
import { getAllChats } from "../../Redux/Message/message.action";
import { useDispatch, useSelector } from "react-redux";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Message = () => {
  const dispath = useDispatch();
  const { message, auth } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState();
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    dispath(getAllChats());
  }, []);

  console.log("chats ----- ", message.chats);

  const handleSelectImage = () => {
    console.log("handle select image...");
  };

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat.id,
      content: value,
      image: selectedImage,
    };
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
                  {message.chats.map((item) => {
                    return;
                    <div
                      onClick={() => {
                        setCurrentChat(item);
                        setMessages(item.meesage);
                      }}
                    >
                      <UserChatCard chat={item} />
                    </div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="h-full" item xs={9}>
          {currentChat ? (
            <div>
              <div className="flex justify-between items-center border-1 p-5">
                <div className="flex items-center space-x-3">
                  <Avatar src="https://mblogthumb-phinf.pstatic.net/MjAyMTA4MjJfMjQ0/MDAxNjI5NTg1ODE2ODcz.JEcQTYuxRsD9ExHFjT6uhK5RefXxP3Oc0MWq7QLpYagg.Nc0BniHfceL8ptHmtZl7yWEXTdtqNCEEL3N1WUtgLGAg.JPEG.yevely001/IMG_3495.jpg?type=w800" />
                  <p>
                    {auth.user.id === currentChat.users[0].id
                      ? currentChat.users[1].firstName +
                        currentChat.users[1].lastName
                      : currentChat.users[0].firstName +
                        currentChat.users[0].lastName}
                  </p>
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
            </div>
          ) : (
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <ChatBubbleOutlineIcon sx={{ fontSize: "15rem" }} />
              <p className="text-xl font-semibold">선택한 채팅 없음</p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
