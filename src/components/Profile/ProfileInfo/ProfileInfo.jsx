import s from'./ProfileInfo.module.css'

 const ProfileInfo = (props) => {
    return (
      <div>
        <div>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
        </div>
        <div className={s.description__block}>
            <img src={props.profile.photos.small} alt=""/>
            <div className="info">
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <p>{ props.profile.lookingForAJob ? 'Уже работаю' : 'Ищу работу' }</p>
            </div>
        </div>
      </div>  
    );
}

export default ProfileInfo;