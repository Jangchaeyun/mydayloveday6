import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const SearchUser = () => {
  const handleSearchUser = () => {
    console.log("search user...");
  };
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b5054] outline-none w-full px-5 rounded-full"
          type="text"
          placeholder="사용자 검색..."
          onChange={handleSearchUser}
        />
      </div>
      {false && (
        <Card>
          <CardHeader
            onClick={() => {
              handleClick();
            }}
            avatar={
              <Avatar src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/008/95/391/895391_20210927121445_500.jpg?c01cc9ef5d83939f170b548cea095692/melon/optimize/90" />
            }
            title="loveDay"
            subheader={"loveday"}
          />
        </Card>
      )}
    </div>
  );
};

export default SearchUser;
