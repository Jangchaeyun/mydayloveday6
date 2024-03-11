import React from "react";
import WestIcon from "@mui/icons-material/West";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const Message = () => {
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
                <div className="">searchUser</div>
                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  UserChatCard
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
              message
            </div>
          </div>
          <div className="sticky bottom-0 border-l"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
