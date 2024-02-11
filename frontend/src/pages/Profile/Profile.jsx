import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
const Profile = () => {
  const { id } = useParams();
  return (
    <div className="py-10 w-[70%]">
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
          
        </section>
      </div>
    </div>
  );
};

export default Profile;
