import React from "react";
import Card from "@mui/material/Card";

const SearchUser = () => {
  const handleSearchUser = () => {
    console.log("search user...");
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
      {true && <Card></Card>}
    </div>
  );
};

export default SearchUser;
