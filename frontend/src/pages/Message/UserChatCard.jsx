import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const UserChatCard = () => {
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{
            width: "3.5rem",
            height: "3.5rem",
            fontSize: "1.5rem",
            bgcolor: "#191c29",
            color: "rgb(88, 199, 250)",
          }}
          src="https://cdn.mhnse.com/news/photo/202307/206270_210840_722.jpg"
        />
      }
      action={<IconButton aria-label=""></IconButton>}
      title=""
      subheader=""
    />
  );
};

export default UserChatCard;
