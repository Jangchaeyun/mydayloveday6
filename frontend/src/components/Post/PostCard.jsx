import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const PostCard = ({ item }) => {
  return (
    <Card className="">
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label=""></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName + " " + item.user.lastName}
        subheader={
          "@" +
          item.user.firstName.toLowerCase() +
          "_" +
          item.user.lastName.toLowerCase()
        }
      />
      <CardMedia component="img" height="194" image={item.image} alt="image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>{<ShareIcon />}</IconButton>
          <IconButton>{<ChatBubbleIcon />}</IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
      <section>
        <div className="flex items-center space-x-5 mx-3 my-5">
          <Avatar sx={{}} />
          <input
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                console.log("enter pressed ----- ", e.target.value);
              }
            }}
            className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
            type="text"
            placeholder="답글 달기..."
          />
        </div>
        <Divider />
        <div className="mx-3 space-y-2 my-5 text-xs">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-5">
              <Avatar sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}>
                C
              </Avatar>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default PostCard;
