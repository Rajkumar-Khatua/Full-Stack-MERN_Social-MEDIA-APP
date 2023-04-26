import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Leftbar from "../../components/LeftBar/Leftbar";
import Right from "../../components/RightBar/Rightbar";
import "./Profile.scss"

function Profile() {
  return (
    <>
    <Header/>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://cdn.pixabay.com/photo/2014/07/04/19/15/man-384178_960_720.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://cdn.pixabay.com/photo/2015/07/15/06/42/man-845709_960_720.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Rajkumar </h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
        <Leftbar />
            <Feed />
            <Right profile/>
          </div>
        </div>
      </div>
    
    </>
  );
}
export default Profile;
