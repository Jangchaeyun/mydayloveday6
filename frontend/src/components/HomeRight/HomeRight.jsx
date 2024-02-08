import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import PouplarUserCard from "./PouplarUserCard";
import Card from "@mui/material/Card";

const popularUser = [1, 1, 1, 1, 1];
const HomeRight = () => {
  return (
    <div className="pr-5">
      <SearchUser />
      <Card className="p-5">
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">당신을 위한 제안</p>
          <p className="text-xs font-semibold opacity-95">모두 보기</p>
        </div>
        <div className="">
          {popularUser.map((item) => (
            <PouplarUserCard />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
