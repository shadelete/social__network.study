import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import {putProfileStatus, setUserStatus} from "../../redux/profile-reducer";

const Profile = (props) => {
    if(!props.profile){
        return <Preloader />
    }
  return (
    <div>
      <ProfileInfo currentId={props.profile.userId} myId={props.myId} putProfileStatus={props.putProfileStatus} profile={props.profile} profileStatus={props.profileStatus}/>
      <MyPostsContainer store={props}/>
    </div>
  );
};

export default Profile;
