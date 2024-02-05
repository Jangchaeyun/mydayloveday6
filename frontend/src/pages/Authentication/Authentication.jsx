import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img
            className="h-full w-full"
            src="https://ifh.cc/g/BKlL1f.png"
            alt=""
          />
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">MydayLoveDay6</h1>
                <p className="text-center text-sm w-[70%]">
                  친구 및 가족과 함께 사진, 비디오 및 메시지를 캡처, 편집 및
                  공유할 수 있는 간단하고 재미있는 커뮤니티
                </p>
              </div>
              {/* <Login /> */}
              <Register />
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
