import React from "react";
import WestIcon from "@mui/icons-material/West";
import Grid from "@mui/material/Grid";

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
        <Grid className="h-full" item xs={9}></Grid>
      </Grid>
    </div>
  );
};

export default Message;
