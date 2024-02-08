import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

const PouplarUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="user"></Avatar>}
        action={
          <Button size="small" color="success">
            Follow
          </Button>
        }
        title="day6mayday"
        subheader="@day6mayday"
      />
    </div>
  );
};

export default PouplarUserCard;
