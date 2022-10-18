import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfleInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // debugger
  return (
    <div>
      <ProfleInfo />
      <MyPostsContainer store={props}/>
    </div>
  );
};

export default Profile;
