import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../../components/Header/Header";
import Leftbar from "../../components/LeftBar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Right from "../../components/RightBar/Rightbar";
import "./home.scss";

function Home() {
  return (
    <>
      <Header />
      <div className='homeContainer'>
        <Leftbar />
        <Feed />
        <Right />
      </div>
    </>
  );
}
export default Home;
