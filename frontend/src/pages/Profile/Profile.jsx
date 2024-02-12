import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Button, Card } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";

const tabs = [
  { value: "post", name: "포스트" },
  { value: "reels", name: "릴스" },
  { value: "saved", name: "저장" },
  { value: "repost", name: "제개시" },
];
const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1, 1];
const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.mhnse.com/news/photo/202109/84668_62215_1913.jpg"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://i.namu.wiki/i/P2JXK0XHZDt7RNrs2oqNilKr6N5scsfALk2dRzcGqg018BwRPYXllLqb0eXf77kVHeRhylLl-yfZUup_Ds5KiAYi3CPS35qpfN5OGJdazQDlJxnU1XquKiEg78Ab3Rp1o8yn-ITIqVYIkLe5EKW_-g.webp"
          />
          {true ? (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="outlined"
              color="success"
            >
              프로필 수정
            </Button>
          ) : (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="outlined"
              color="success"
            >
              팔로우
            </Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">MydayForever</h1>
            <p>@mydayforever</p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>41 포스트</span>
            <span>35 팔로워</span>
            <span>5 팔로잉</span>
          </div>
          <div>
            <p>청춘의 한페이지를 함께 써내려가자😻🍀😍</p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10">
                {reels.map((item) => (
                  <UserReelCard />
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {savedPost.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
              <div>Repost</div>
            )}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
