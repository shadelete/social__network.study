import s from'./ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import {putProfileStatus, setUserStatus} from "../../../redux/profile-reducer";

 const ProfileInfo = (props) => {
    return (
      <div>
        <div>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
        </div>
        <div className={s.description__block}>
            <img src={props.profile.photos.small} alt=""/>
            <ProfileStatus currentId={props.currentId} myId={props.myId} putProfileStatus={props.putProfileStatus} profileStatus={props.profileStatus}/>
            <div className="info">
                <p>{props.profile.fullName}</p>
                <p>{ props.profile.lookingForAJob ? 'Уже работаю' : 'Ищу работу' }</p>
            </div>
        </div>
      </div>  
    );
}

export default ProfileInfo;