import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../Redux/Auth/auth.action";
import { createChat } from "../../Redux/Message/message.action";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { message, auth } = useSelector((store) => store);

  const handleSearchUser = (e) => {
    setUsername(e.target.value);
    console.log("search user...", auth.searchUser);
    dispatch(searchUser(username));
  };
  const handleClick = (id) => {
    dispatch(createChat({ userId: id }));
  };
  return (
    <div>
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b5054] outline-none w-full px-5 py-3 rounded-full"
          type="text"
          placeholder="사용자 검색..."
          onChange={handleSearchUser}
        />
        {username &&
          auth.searchUser.map((item) => (
            <Card
              key={item.id}
              className="absolute w-full z-10 top-[4.5rem] cursor-pointer"
            >
              <CardHeader
                onClick={() => {
                  handleClick(item.id);
                  setUsername("");
                }}
                avatar={
                  <Avatar src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/008/95/391/895391_20210927121445_500.jpg?c01cc9ef5d83939f170b548cea095692/melon/optimize/90" />
                }
                title={item.firstName + item.lastName}
                subheader={
                  "@" +
                  item.firstName.toLowerCase() +
                  "_" +
                  item.lastName.toLowerCase()
                }
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default SearchUser;
